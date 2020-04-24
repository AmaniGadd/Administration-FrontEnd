import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EquipeComponent } from './equipe.component';
//import { AuthorDetailComponent } from './author-detail/author-detail.component';

const routes: Routes = [
  {
    path: '', component: EquipeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule {}