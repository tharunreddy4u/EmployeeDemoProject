import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { ResumeComponent } from './resume/resume.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

const routes: Routes = [
  {
    path: 'employeelist',
    component: EmployeelistComponent,
  },
  {
    path: 'addemployee',
    component: AddemployeeComponent,
  },
  {
    path: 'editemployee',
    component: EditemployeeComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'cart',
    component: CartItemsComponent,

  },
  {
    path: '**',
    component: EmployeelistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
