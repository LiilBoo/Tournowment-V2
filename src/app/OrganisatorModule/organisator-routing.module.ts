import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgDashboardComponent } from './Pages/org-dashboard/org-dashboard.component';



const routes: Routes = [
  {path:'', component: OrgDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisatorRoutingModule { }
