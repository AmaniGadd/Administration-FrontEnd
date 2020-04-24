import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './tables.routing.module';
import { TablesComponent } from './tables.component';
//import { AuthorService } from 'src/app/services/author.service';
import { EmployeService } from 'src/app/services/employe.service';
import { ApiService } from 'src/app/services/general/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NgxDatatableModule } from '@swimlane/ngx-datatable';
//import { BsModalRef } from 'ngx-bootstrap';
//import { BookDetailsComponent } from './book-details/book-details.component';
//import { AlertifyService } from 'src/app/services/alertify.service';

@NgModule({
  declarations: [TablesComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
  
    ReactiveFormsModule
  ],
  providers: [
    
    EmployeService,
   
    ApiService
  ]
})
export class BookModule { }
