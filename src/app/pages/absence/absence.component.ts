import { Component, OnInit } from "@angular/core";
import { AbsenceService } from 'src/app/services/absence.service';

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
} 

@Component({
  selector: "app-absence",
  templateUrl: "absence.component.html"
})
export class AbsenceComponent implements OnInit {
  absences = [];
  rows = [];
  cols = [];
  control = true;
  message: string | undefined;
  constructor(private absenceService: AbsenceService) {}

  ngOnInit() {
    this.control = true;
    this.loadAbsences();
  }
    loadAbsences(){
      this.absenceService.getAll().subscribe(res => {
        this.absences = res;
      });
    
  }
  deleteAbsence(id) {
    this.absenceService.delete(id).subscribe(res => {
      this.control = true;
      this.loadAbsences();
      this.message = ' Record was deletedr. ';
     // this.alert.success(' Record was deleted. ');
    },
      error => {
        //this.alert.error(' No Records Found.. ');
        this.message = ' No Records Found.. ';
      });
  }
}
