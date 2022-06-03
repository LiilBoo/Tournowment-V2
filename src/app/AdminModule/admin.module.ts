import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
//*---------- My stuff ---------
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

const adminModules = [

];

const adminComponents = [
  DashboardComponent,
];

@NgModule({
  declarations: [
    ...adminComponents,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
