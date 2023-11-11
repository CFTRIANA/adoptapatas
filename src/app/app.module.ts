import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

import { UserManagementComponent } from './admin/user-management/user-management.component';
import { RoleManagementComponent } from './admin/role-management/role-management.component';
import { DeleteRoleComponent } from './admin/delete-role/delete-role.component';

import { FoundationRegistrationComponent } from './foundation/foundation-registration/foundation-registration.component';
import { DogRegistrationComponent } from './foundation/dog-registration/dog-registration.component';
import { DogUpdateComponent } from './foundation/dog-update/dog-update.component';
import { GenerateReportComponent } from './foundation/generate-report/generate-report.component';

import { AdoptionComponent } from './adopter/adoption/adoption.component';
import { AdoptionCartComponent } from './adopter/adoption-cart/adoption-cart.component';
import { AdopterDashboardComponent } from './adopter/adopter-dashboard/adopter-dashboard.component';

import { FoundationRequestsComponent } from './moderator/foundation-requests/foundation-requests.component';
import { ReportsComponent } from './moderator/reports/reports.component';
import { NotificationComponent } from './notification/notification.component';
import { GuardianrutaComponent } from './guardianruta/guardianruta.component';

@NgModule({
  declarations: [
   AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UserManagementComponent,
    RoleManagementComponent,
    DeleteRoleComponent,
    FoundationRegistrationComponent,
    //DogRegistrationComponent,
    DogUpdateComponent,
    GenerateReportComponent,
    //AdoptionComponent,
    AdoptionCartComponent,
    AdopterDashboardComponent,
   // FoundationRequestsComponent,
    ReportsComponent,
    NotificationComponent,
    GuardianrutaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [], // Puedes añadir servicios aquí si los necesitas
  bootstrap: [AppComponent]
})
export class AppModule { }
