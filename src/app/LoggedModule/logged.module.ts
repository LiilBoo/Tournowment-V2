import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { MyToursComponent } from './Pages/my-tours/my-tours.component';
import { MyTeamsComponent } from './Pages/my-teams/my-teams.component';
import { MyInfosComponent } from './Pages/my-infos/my-infos.component';


@NgModule({
  declarations: [
    MyToursComponent,
    MyTeamsComponent,
    MyInfosComponent
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule
  ]
})
export class LoggedModule { }
