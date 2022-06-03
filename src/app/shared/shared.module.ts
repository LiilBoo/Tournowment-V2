import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//*My app shell surrounding root
import { ShellComponent } from './shell/shell.component';
//*Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
//* My stuff
import { HomeComponent } from './Pages/home/home.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { Page404Component } from './Pages/page404/page404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageSignUpComponent } from './Pages/page-sign-up/page-sign-up.component';
import { TourDetailsComponent } from './Pages/tour-details/tour-details.component';
import { RouterModule } from '@angular/router';

const components = [
  ShellComponent,
  HomeComponent,
  LoginPageComponent,
  Page404Component,
  PageSignUpComponent,
  TourDetailsComponent,
];

const modules = [
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
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
