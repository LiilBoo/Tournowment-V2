import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyToursComponent } from './Pages/my-tours/my-tours.component';

const routes: Routes = [
  {path:'', component: MyToursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
