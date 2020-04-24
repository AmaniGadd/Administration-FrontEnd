import { Component, OnInit } from "@angular/core";
import { ReunionService } from 'src/app/services/reunion.service';

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
} 

@Component({
  selector: "app-reunion",
  templateUrl: "reunion.component.html"
})
export class ReunionComponent implements OnInit {
  reunions = [];
  rows = [];
  cols = [];
  control = true;
  message: string | undefined;
  constructor(private reunionService: ReunionService) {}

  ngOnInit() {
    this.control = true;
    this.loadReunions();
  }
  loadReunions(){
      this.reunionService.getAll().subscribe(res => {
        this.reunions = res;
      });
    
  }
  deleteReunion(id) {
    this.reunionService.delete(id).subscribe(res => {
      this.control = true;
      this.loadReunions();
      this.message = ' Record was deletedr. ';
     // this.alert.success(' Record was deleted. ');
    },
      error => {
        //this.alert.error(' No Records Found.. ');
        this.message = ' No Records Found.. ';
      });
  }
}
