import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TablesComponent } from './tables.component';
//import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  {
    path: '', component: TablesComponent
  },
  {
    //path: 'book-detail/:id', component: BookDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {}