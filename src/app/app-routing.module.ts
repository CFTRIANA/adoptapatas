


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

import { UserManagementComponent } from './admin/user-management/user-management.component';
import { RoleManagementComponent } from './admin/role-management/role-management.component';
import { DeleteRoleComponent } from './admin/delete-role/delete-role.component';

import { FoundationRegistrationComponent } from './foundation/foundation-registration/foundation-registration.component';
import { DogRegistrationComponent } from './foundation/dog-registration/dog-registration.component';
import { DogUpdateComponent } from './foundation/dog-update/dog-update.component';
//import { GenerateReportComponent } from './foundation/generate-report/generate-report.component';

import { AdoptionComponent } from './adopter/adoption/adoption.component';
import { AdoptionCartComponent } from './adopter/adoption-cart/adoption-cart.component';
import { AdopterDashboardComponent } from './adopter/adopter-dashboard/adopter-dashboard.component';

import { FoundationRequestsComponent } from './moderator/foundation-requests/foundation-requests.component';
import { ReportsComponent } from './moderator/reports/reports.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'admin/user-management', component: UserManagementComponent },
  { path: 'admin/role-management', component: RoleManagementComponent },
  { path: 'admin/delete-role', component: DeleteRoleComponent },

  { path: 'foundation/foundation-registration', component: FoundationRegistrationComponent },
  { path: 'foundation-registration', component: FoundationRegistrationComponent },
  { path: 'dog-registration', component: DogRegistrationComponent },
 { path: 'dog-update', component: DogUpdateComponent },
 // { path: 'foundation/generate-report', component: GenerateReportComponent },

  { path: 'adoption', component: AdoptionComponent },

  { path: 'adoption-cart', component: AdoptionCartComponent },
  { path: 'adopter-dashboard', component: AdopterDashboardComponent },

  { path: 'foundation-requests', component: FoundationRequestsComponent },
  { path: 'reports', component: ReportsComponent },

  // Puedes añadir más rutas según sea necesario

  { path: '', redirectTo: '/adopter-dashboard', pathMatch: 'full' },

  // Ruta por defecto redirige al login





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
