import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/Pages/home/home.component';
import { LoginPageComponent } from './shared/Pages/login-page/login-page.component';
import { Page404Component } from './shared/Pages/page404/page404.component';
import { PageSignUpComponent } from './shared/Pages/page-sign-up/page-sign-up.component';
import { TourDetailsComponent } from './shared/Pages/tour-details/tour-details.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginPageComponent},
  {path:'sign-up', component: PageSignUpComponent},
  {path:'tour-details/:id', component: TourDetailsComponent},
  {
    path: 'admin', 
    loadChildren: () => import('./AdminModule/admin.module').then((module) => module.AdminModule)
  },
  {
    path:'my-infos',
    loadChildren: () => import('./LoggedModule/logged.module').then((module) => module.LoggedModule)
  },
  {
    path: 'organisator',
    loadChildren: () => import('./OrganisatorModule/organisator.module').then((module) => module.OrganisatorModule)
  },
  {path: '404-not-found', component: Page404Component},
  {path: '**' , redirectTo: '/404-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
