import { Component, OnInit } from "@angular/core";
import { EquipeService } from 'src/app/services/equipe.service';
import { EmployeService } from 'src/app/services/employe.service';
import { Equipe } from './Equipe';

interface Marker {
lat: number;
lng: number;

label?: string; 
draggable?: boolean;
}

@Component({
  selector: "app-equipe",
  templateUrl: "equipe.component.html"
})
export class EquipeComponent implements OnInit {
  equipe = new Equipe();
  equipes = [];
  employes = [];
  rows = [];
  cols = [];
  control = true;
  message: string | undefined;
  id: number;
  constructor(private equipeService: EquipeService,private employeService: EmployeService) {}

  ngOnInit() { 
    this.control = true;
    this.loadEquipes();
  }
  loadAuthorDetail() {
    this.equipeService.getById(this.id).subscribe(response => {
      this.equipe = response;
      
    });
  }
    loadEquipes(){
      this.equipeService.getAll().subscribe(res => {
        this.equipes = res;
        
      
  });
}

  deleteEquipe(id) {
    this.equipeService.delete(id).subscribe(res => {
      this.control = true;
      this.loadEquipes();
      this.message = ' Record was deletedr. ';
     // this.alert.success(' Record was deleted. ');
    },
      error => {
        //this.alert.error(' No Records Found.. ');
        this.message = ' No Records Found.. ';
      });
  }
}
