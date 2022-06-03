import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//*My app shell surrounding root
import { ShellComponent } from './shell/shell.component';
//*Angular material
import { AngularMaterialModule } from '../AngularMaterialModule/angular-material.module';
//* My stuff
import { HomeComponent } from './Pages/home/home.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { Page404Component } from './Pages/page404/page404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageSignUpComponent } from './Pages/page-sign-up/page-sign-up.component';
import { TourDetailsComponent } from './Pages/tour-details/tour-details.component';


const components = [
  ShellComponent,
  HomeComponent,
  LoginPageComponent,
  Page404Component,
  PageSignUpComponent,
  TourDetailsComponent,
];

const modules = [
  AngularMaterialModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
