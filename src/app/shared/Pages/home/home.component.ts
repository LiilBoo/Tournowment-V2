import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //* will need HttpClient
  constructor() { }

  //* will need to load cards onInitialization
  ngOnInit(): void {
  }

}
