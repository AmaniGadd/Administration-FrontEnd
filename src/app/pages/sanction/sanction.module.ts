import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanctionRoutingModule } from './sanction.routing.module';
import { SanctionComponent } from './sanction.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalRef, ModalModule, BsModalService} from 'ngx-bootstrap';
import { SanctionService } from 'src/app/services/sanction.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AuthorDetailComponent } from './author-detail/author-detail.component';

import { ApiService } from 'src/app/services/general/api.service';
import { AlertifyService } from 'src/app/services/alertify.service';

//import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [SanctionComponent],
  imports: [
    CommonModule,
    SanctionRoutingModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule
    
  ],
  providers: [
    SanctionService,
    AlertifyService,
    ApiService,
    BsModalRef
  ]
})
export class SanctionModule { }
 