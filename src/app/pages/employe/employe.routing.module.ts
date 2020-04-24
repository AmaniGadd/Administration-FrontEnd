import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EmployeComponent } from './employe.component';
import { EditEmployeComponent } from './editEmploye/editEmploye.component';

const routes: Routes = [
  {
    path: '', component: EmployeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule {}