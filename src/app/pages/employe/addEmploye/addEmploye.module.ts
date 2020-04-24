import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AddEmployeComponent } from './addEmploye.component';
import { EmployeService } from 'src/app/services/employe.service';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [
        EmployeService
        
      ],
    declarations: [
        AddEmployeComponent
    ],
    bootstrap: [AddEmployeComponent]
})
export class AddEmployeModule { }