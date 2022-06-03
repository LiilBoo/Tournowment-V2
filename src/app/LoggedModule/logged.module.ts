import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { MyToursComponent } from './Pages/my-tours/my-tours.component';


@NgModule({
  declarations: [
    MyToursComponent
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule
  ]
})
export class LoggedModule { }
