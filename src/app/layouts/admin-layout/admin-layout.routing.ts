import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
//import { MapComponent } from "../../pages/map/map.component";
import { EmployeComponent } from "../../pages/employe/employe.component";
import { EquipeComponent } from "../../pages/equipe/equipe.component";
import { AbsenceComponent } from "../../pages/absence/absence.component";
import { CongeComponent } from "../../pages/conge/conge.component";
import { ReunionComponent } from "../../pages/reunion/reunion.component";
import { SanctionComponent } from "../../pages/sanction/sanction.component";
import { EditEmployeComponent } from "../../pages/employe/editEmploye/editEmploye.component";

import { AddEmployeComponent } from "../../pages/employe/addEmploye/addEmploye.component";

import { UserComponent } from "../../pages/user/user.component";
//import { TablesComponent } from "../../pages/tables/tables.component";
//import { TypographyComponent } from "../../pages/typography/typography.component";
import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
 // { path: "maps", component: MapComponent },
  { path: "employe", component: EmployeComponent },
  { path: "equipe", component: EquipeComponent },
  { path: "absence", component: AbsenceComponent },
  { path: "conge", component: CongeComponent },
  { path: "reunion", component: ReunionComponent },
  { path: "sanction", component: SanctionComponent },
 // { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "editEmploye/:id", component: EditEmployeComponent },

  { path: "addEmploye", component: AddEmployeComponent },
  /*{ path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },*/
  { path: "rtl", component: RtlComponent }
];
