import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipeRoutingModule } from './equipe.routing.module';
import { EquipeComponent } from './equipe.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsModalRef, ModalModule, BsModalService} from 'ngx-bootstrap';
import { EquipeService } from 'src/app/services/equipe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AuthorDetailComponent } from './author-detail/author-detail.component';

import { ApiService } from 'src/app/services/general/api.service';
import { AlertifyService } from 'src/app/services/alertify.service';

//import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [EquipeComponent],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule
    
  ],
  providers: [
    EquipeService,
    AlertifyService,
    ApiService,
    BsModalRef
  ]
})
export class EquipeModule { }
 