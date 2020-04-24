import { Component, OnInit } from "@angular/core";
import { Page } from 'src/app/shared/Page';
import { EmployeService } from 'src/app/services/employe.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { AlertifyService } from 'src/app/services/alertify.service';

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean; 
}
 
@Component({
  selector: "app-employe",
  templateUrl: "employe.component.html"
})
export class EmployeComponent implements OnInit {
  employes = [];
  rows = [];
  cols = [];
  control = true; 
  page = new Page();
  message: string | undefined;
  EmployeForm: FormGroup;

  constructor(private employeService: EmployeService,
    private formBuilder: FormBuilder,
    private router: Router

            ) {}

  ngOnInit() {
    this.control = true;
    this.loadEmployes();
    
  }
    loadEmployes(){
      this.employeService.getAll().subscribe(res => {
        this.employes = res;
      });
    
  }
  updateEmploye(id: number){
    this.router.navigate(['/editEmploye', id]);
  }

  deleteEmploye(id) {
    this.employeService.delete(id).subscribe(res => {
      this.control = true;
      this.loadEmployes();
      this.message = ' Record was deletedr. ';
     // this.alert.success(' Record was deleted. ');
    },
      error => {
        //this.alert.error(' No Records Found.. ');
        this.message = ' No Records Found.. ';
      });
  }
  get f() { return this.EmployeForm.controls; }
}
