import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongeRoutingModule } from './conge.routing.module';
import { CongeComponent } from './conge.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalRef, ModalModule, BsModalService} from 'ngx-bootstrap';
import { CongeService } from 'src/app/services/conge.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AuthorDetailComponent } from './author-detail/author-detail.component';

import { ApiService } from 'src/app/services/general/api.service';
import { AlertifyService } from 'src/app/services/alertify.service';

//import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [CongeComponent],
  imports: [
    CommonModule,
    CongeRoutingModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule
    
  ],
  providers: [
    CongeService,
    AlertifyService,
    ApiService,
    BsModalRef
  ]
})
export class CongeModule { }
 