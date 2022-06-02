import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  signInError = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmitSignIn(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;

    const requeteObservable = this.authService.logUser(username, password);

    console.log(username,password); //s'execute on rentre dans la methode

    requeteObservable.subscribe({
      next: (response: any) => {

        console.log(response.token);
      
        localStorage.setItem('token', response.token);

        this.router.navigateByUrl('/');
        
      },
      error: (err: any) => {
        this.signInError = true;
      },
    });
  }

}
