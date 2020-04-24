import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReunionRoutingModule } from './reunion.routing.module';
import { ReunionComponent } from './reunion.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalRef, ModalModule, BsModalService} from 'ngx-bootstrap';
import { ReunionService } from 'src/app/services/reunion.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AuthorDetailComponent } from './author-detail/author-detail.component';

import { ApiService } from 'src/app/services/general/api.service';
import { AlertifyService } from 'src/app/services/alertify.service';

//import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [ReunionComponent],
  imports: [
    CommonModule,
    ReunionRoutingModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule
    
  ],
  providers: [
    ReunionService,
    AlertifyService,
    ApiService,
    BsModalRef
  ]
})
export class ReunionModule { }
 