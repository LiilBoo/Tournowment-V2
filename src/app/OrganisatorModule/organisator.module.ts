import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisatorRoutingModule } from './organisator-routing.module';
import { OrgDashboardComponent } from './Pages/org-dashboard/org-dashboard.component';


@NgModule({
  declarations: [
    OrgDashboardComponent
  ],
  imports: [
    CommonModule,
    OrganisatorRoutingModule
  ]
})
export class OrganisatorModule { }
