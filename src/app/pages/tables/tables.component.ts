import { Component, OnInit } from "@angular/core";
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  rows = [];
  cols = [];
  control = true;
  employes = [];
  constructor(private employeService: EmployeService) {}
  
  ngOnInit() {
    this.control = true;
  }
}
