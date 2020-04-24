import { Component, OnInit } from "@angular/core";
import { SanctionService } from 'src/app/services/sanction.service';

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
} 

@Component({
  selector: "app-sanction",
  templateUrl: "sanction.component.html"
})
export class SanctionComponent implements OnInit {
  sanctions = [];
  rows = [];
  cols = [];
  control = true;
  message: string | undefined;
  constructor(private sanctionService: SanctionService) {}

  ngOnInit() {
    this.control = true;
    this.loadSanctions();
  }
  loadSanctions(){
      this.sanctionService.getAll().subscribe(res => {
        this.sanctions = res;
      });
    
  }
  deleteSanction(id) {
    this.sanctionService.delete(id).subscribe(res => {
      this.control = true;
      this.loadSanctions();
      this.message = ' Record was deletedr. ';
     // this.alert.success(' Record was deleted. ');
    },
      error => {
        //this.alert.error(' No Records Found.. ');
        this.message = ' No Records Found.. ';
      });
  }
}
