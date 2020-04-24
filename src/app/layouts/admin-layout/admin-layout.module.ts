import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { EmployeComponent } from "../../pages/employe/employe.component";
import { EquipeComponent } from "../../pages/equipe/equipe.component";
import { AbsenceComponent } from "../../pages/absence/absence.component";
import { CongeComponent } from "../../pages/conge/conge.component";
import { ReunionComponent } from "../../pages/reunion/reunion.component";
import { SanctionComponent } from "../../pages/sanction/sanction.component";  
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { EditEmployeComponent } from "../../pages/employe/editEmploye/editEmploye.component";
import { AddEmployeComponent } from "../../pages/employe/addEmploye/addEmploye.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { RtlComponent } from "../../pages/rtl/rtl.component";
import { AlertifyService } from '../../services/alertify.service';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    EmployeComponent,
    EditEmployeComponent,
    AddEmployeComponent,
    EquipeComponent,
    AbsenceComponent,
    CongeComponent,
    ReunionComponent,
    SanctionComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    RtlComponent
  ],
  providers: [
    AlertifyService],
})
export class AdminLayoutModule {}
