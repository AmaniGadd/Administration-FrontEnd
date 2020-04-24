import { Component, OnInit } from "@angular/core";
import { EmployeService } from 'src/app/services/employe.service';
import { Employe } from '../employe';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipeService } from 'src/app/services/equipe.service';
import { Equipe } from '../../equipe/Equipe';

@Component({
  selector: "app-editEmploye",
  templateUrl: "editEmploye.component.html"
}) 
export class EditEmployeComponent implements OnInit {
  
   employe = new Employe();
  showModal = true;
  updated = true;
  equipes = []
  id: number;
  noms = [];
  submitted = false;
  eqSelected:Number; 
  registerForm: FormGroup;
  constructor(private employeService: EmployeService,
    private equipeService: EquipeService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {

    this.updated=true;
    this.getAllEmploye();
    this.loadEmployeDetail();
    //this.getAllEmploye();
    this.employeService.getById(this.id).subscribe(res => {
      //this.employe =  res;
      this.LoadEmployeUpdateForm(this.employe);
    });
    this.LoadEmployeUpdateForm(this.employe);
   }
   
  
loadEmployeDetail() {
  this.getAllEmploye();
  this.route.params.subscribe(params => {
    this.id = params['id'];
   
  });
  this.employeService.getById(this.id).subscribe(res => {
    //console.log(res);
    this.employe =  res;
   
  }); //chnia el ress heki mou5alafeti bekrii taana7ehaa najarb beha 
  
}
getAllEmploye(){
  this.employeService.getAll().subscribe( res => {
    this.noms = res;
    
  });
}
LoadEmployeUpdateForm(res) {
  this.updated=true;
  this.getAllEquipes();
  this.getAllEmploye();
 //el employe fih ken equipe 
    this.registerForm = this.formBuilder.group({
      
      'matricule': [res['matricule'], [Validators.required]],
      'nom': [res['nom'], [Validators.required]],
      'prenom': [res['prenom'], [Validators.required]],
      'poste': [res['poste'], [Validators.required]],
      'eqId': [this.employe.equipe.id, [Validators.required]],
      // lena n7awel nejbed fihom taba3t 3la el libraby
}

);
console.log(this.employe.equipe.id);
console.log(this.registerForm.value);


}
getAllEquipes(){
  this.equipeService.getAll().subscribe(res => {
  this.equipes = res;
});}

updateAuthor(){
  console.log(this.employe);//hethi win affichithom 
  console.log('loading')
  if (!this.registerForm.valid) {
    return;
  }
  console.log(this.id);

  this.employeService.put(this.id,this.registerForm.value).subscribe(
    res => {
      //this.staticLoadPage();
      this.LoadEmployeUpdateForm(res);
      if(res['id']===this.id){
        this.updated = false;
        console.log( 'Registration successful.');
    }
      error =>{
        console.log(error);
       // console.log('Failed to register <br/> Error : ' );
 
}}
);}

updateEmploye() {
  this.employeService.put(this.id, this.employe)
    .subscribe(data => console.log(data), 
    error => console.log(error));
  this.employe = new Employe();
console.log('this.employe',this.employe)
  this.router.navigate(['/employe']);
}

  get f() { return this.registerForm.controls;}
}
