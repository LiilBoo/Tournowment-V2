import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first, Observable, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  signInError = false;

  subscription$!: Subscription;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmitSignIn(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;


    //!Error should be handled in the back-end
   let observableRequest = this.authService.logUser(username, password).pipe( 
      first()
      );
      
      this.subscription$ = observableRequest.subscribe({
        next: (token: string) => {

          console.log(token);
        
          localStorage.setItem('token', token);
  
          this.router.navigateByUrl('/');
        },
        error: (err: any) => {
          this.signInError = true;
        },
    });

  }; //end of ngOnInit

  //! if wrong password, sub is done but never emits a first value
  ngOnDestroy(): void {
    this.subscription$ && this.subscription$.unsubscribe();
  }; 

}
