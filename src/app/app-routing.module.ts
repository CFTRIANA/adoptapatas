




/*
const routes: Routes = [


  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'foundation-registration', component: FoundationRegistrationComponent },


 // { path: 'foundation/foundation-registration', component: FoundationRegistrationComponent },


  solo lo abra  fundacion con rol 2
  { path: 'dog-registration', component: DogRegistrationComponent },
 { path: 'dog-update', component: DogUpdateComponent },

solo puede acceder el rol 1
  { path: 'adoption', component: AdoptionComponent },

  { path: 'adopter-dashboard', component: AdopterDashboardComponent },

solo lo abra moderardor rol 3




ruta principal , todos los roles deben de acceder
{ path: 'adoption-cart', component: AdoptionCartComponent },
  { path: '', redirectTo: '/adopter-dashboard', pathMatch: 'full' },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


 {
    path: 'dog-update',
    loadChildren: () => import('./foundation/dog-update/dog-update.component').then(m => m.DogUpdateComponent),
    canLoad: [ModuleGuard],
    data: { expectedRole: 2 } // Define el idRol esperado para esta ruta o módulo
  },


*/

// app-routing.module.ts

import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';


import { FoundationRegistrationComponent } from './foundation/foundation-registration/foundation-registration.component';
import { DogRegistrationComponent } from './foundation/dog-registration/dog-registration.component';

//import { GenerateReportComponent } from './foundation/generate-report/generate-report.component';

//import { AdoptionComponent } from './adopter/adoption/adoption.component';
import { AdoptionCartComponent } from './adopter/adoption-cart/adoption-cart.component';
import { AdopterDashboardComponent } from './adopter/adopter-dashboard/adopter-dashboard.component';

import { FoundationRequestsComponent } from './moderator/foundation-requests/foundation-requests.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleGuard } from './/role.guard'; // Asegúrate de importar tu guardia de módulo
import { GuardianrutaComponent } from './guardianruta/guardianruta.component';
import { AdoptionComponent } from './adopter/adoption/adoption.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'foundation-registration', component: FoundationRegistrationComponent },

  { path: 'unauthorized', component: GuardianrutaComponent },

  // Solo abrirá (fundacion con rol 2)

  {
    path: 'adoption',
    loadChildren: () => import('./adopter/adopter.module').then(m => m.AdoptionModule),
    canLoad: [ModuleGuard],
    data: { expectedRole: 1 } // Número de rol esperado para 'adoption'
  },

  {
    path: 'dog-registration',
    loadChildren: () => import('./foundation/foundation.module').then(m => m.FoundationModule),
    canLoad: [ModuleGuard],
    data: { expectedRole: 2 } // Número de rol esperado para 'dog-registration'
  },
 /* {
    path: 'dog-registration',
    loadChildren: () => import('./moderator/moderator.module').then(m => m.ModeratorModulo),
    canLoad: [ModuleGuard],
    data: { expectedRole: 3 } // Número de rol esperado para 'adoption'
  },
*/
  {
    path: 'foundation-requests',
    loadChildren: () => import('./moderator/moderator.module').then(m => m.ModeratorModulo),
    canLoad: [ModuleGuard],
    data: { expectedRole: 3 } // Número de rol esperado para 'adoption'
  },
 /* {
    path: 'foundation-requests',
    loadChildren: () => import('./moderator/foundation-requests/foundation-requests.component').then(m => m.FoundationRequestsComponent),
    canLoad: [ModuleGuard],
    data: { expectedRole: 3 } // Número de rol esperado para 'foundation-requests'
  },*/

  // Ruta principal, todos los roles deben acceder
  { path: 'adopter-dashboard', component: AdopterDashboardComponent },

  { path: '', redirectTo: '/adopter-dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
