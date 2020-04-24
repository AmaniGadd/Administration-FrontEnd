import { Component, OnInit } from "@angular/core";
import { EmployeService } from 'src/app/services/employe.service';
import { EquipeService } from 'src/app/services/equipe.service';
//import { Employe } from '../employe';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { id } from '@swimlane/ngx-datatable';

@Component({
  selector: "app-addEmploye",
  templateUrl: "addEmploye.component.html"
}) 
export class AddEmployeComponent implements OnInit {
  registerForm: FormGroup;
  selectControl: FormControl;
  control = true;
  controlAuthorForm = true;
  equipes = []
  modifiedText:string;
  eqSelected:Number;
  selectedDay:string='';
  constructor(private formBuilder: FormBuilder,
    private employeService: EmployeService,
    private equipeService: EquipeService,

    private router: Router) {}

              ngOnInit() {
                this.getAllEquipes();
                //this.control = true;
                this.controlAuthorForm=true;
                this.registerForm = this.formBuilder.group({
                  'id': [null, [Validators.required]],
                  'matricule': [null, [Validators.required]],
                  'nom': [null, [Validators.required]],
                  'prenom': [null, [Validators.required]],
                  'poste': [null, [Validators.required]],
                  'eqId': [this.getAllEquipes(), [Validators.required]],
                  
  }
  );
  this.eqSelected;

}

  getAllEquipes(){
    this.equipeService.getAll().subscribe(res => {
    this.equipes = res;
  });

  }
  
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }
  saveAuthor(){
    console.log(this.registerForm.value);
    if (!this.registerForm.valid) {
      return;
    }   
    this.employeService.post(this.registerForm.value).subscribe(
      res => {
      this.registerForm.reset();
      //this.control = true;
      this.controlAuthorForm = false;
      console.log( 'Registration successful.');}
      );}
 get f() { return this.registerForm.controls; }


 onEquipeSelected(val:any){
   this.custumFunction(val);


 }
 custumFunction(val:any){
  this.modifiedText="The value is"+val+"was selected";

 }
  

}
              
          
             
   
            