import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/Pages/home/home.component';
import { LoginPageComponent } from './shared/Pages/login-page/login-page.component';
import { Page404Component } from './shared/Pages/page404/page404.component';
import { PageSignUpComponent } from './shared/Pages/page-sign-up/page-sign-up.component';
// import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginPageComponent},
  {path:'sign-up', component: PageSignUpComponent},
  {path:'tour-card/:id-tour', component: PageSignUpComponent},
  {path: '404-not-found', component: Page404Component},
  {path: '**' , redirectTo: '/404-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }