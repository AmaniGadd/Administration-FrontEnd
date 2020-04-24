import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ProfileComponent } from './authentification/profile/profile.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AlertifyService } from './services/alertify.service';
import { authInterceptorProviders } from './authentification/_helpers/auth.interceptor';
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    CommonModule,
    
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent,ProfileComponent,LoginComponent,
    RegisterComponent, AdminLayoutComponent, AuthLayoutComponent],
  providers: [authInterceptorProviders,
              AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
  