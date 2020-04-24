import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeRoutingModule } from './employe.routing.module';
import { EmployeComponent } from './employe.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalRef, ModalModule, BsModalService} from 'ngx-bootstrap';
import { EmployeService } from 'src/app/services/employe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeComponent } from './editEmploye/editEmploye.component';
import { AddEmployeComponent } from './addEmploye/addEmploye.component';
import { ApiService } from 'src/app/services/general/api.service';
import { AlertifyService } from 'src/app/services/alertify.service';

//import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [EmployeComponent,EditEmployeComponent,AddEmployeComponent],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule
    
  ],
  providers: [
    EmployeService,
    AlertifyService,
    ApiService,
    BsModalRef
  ]
})
export class EmployeModule { }
 