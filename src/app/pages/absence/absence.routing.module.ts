import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AbsenceComponent } from './absence.component';
//import { AuthorDetailComponent } from './author-detail/author-detail.component';

const routes: Routes = [
  {
    path: '', component: AbsenceComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbsenceRoutingModule {}