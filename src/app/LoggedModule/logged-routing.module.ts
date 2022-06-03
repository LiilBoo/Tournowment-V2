import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInfosComponent } from './Pages/my-infos/my-infos.component';
import { MyTeamsComponent } from './Pages/my-teams/my-teams.component';
import { MyToursComponent } from './Pages/my-tours/my-tours.component';

const routes: Routes = [
  {path:'', component: MyInfosComponent},
  {path:'my-tournaments', component: MyToursComponent},
  {path: 'my-teams', component: MyTeamsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
