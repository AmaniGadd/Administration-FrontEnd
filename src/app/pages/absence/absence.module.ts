import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceRoutingModule } from './absence.routing.module';
import { AbsenceComponent } from './absence.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalRef, ModalModule, BsModalService} from 'ngx-bootstrap';
import { AbsenceService } from 'src/app/services/absence.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AuthorDetailComponent } from './author-detail/author-detail.component';

import { ApiService } from 'src/app/services/general/api.service';
import { AlertifyService } from 'src/app/services/alertify.service';

//import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [AbsenceComponent],
  imports: [
    CommonModule,
    AbsenceRoutingModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule
    
  ],
  providers: [
    AbsenceService,
    AlertifyService,
    ApiService,
    BsModalRef
  ]
})
export class AbsenceModule { }
 