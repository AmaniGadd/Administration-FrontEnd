import { Component, OnInit } from "@angular/core";
import { CongeService } from 'src/app/services/conge.service';

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
} 

@Component({
  selector: "app-conge",
  templateUrl: "conge.component.html"
})
export class CongeComponent implements OnInit {
  conges = [];
  rows = [];
  cols = [];
  control = true;
  message: string | undefined;
  constructor(private congeService: CongeService) {}

  ngOnInit() {
    this.control = true;
    this.loadConges();
  }
  loadConges(){
      this.congeService.getAll().subscribe(res => {
        this.conges = res;
      });
    
  }
  deleteConge(id) {
    this.congeService.delete(id).subscribe(res => {
      this.control = true;
      this.loadConges();
      this.message = ' Record was deletedr. ';
     // this.alert.success(' Record was deleted. ');
    },
      error => {
        //this.alert.error(' No Records Found.. ');
        this.message = ' No Records Found.. ';
      });
  }
}
