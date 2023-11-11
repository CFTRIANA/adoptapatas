import { ModeratorService } from './moderator.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoundationRequestsComponent } from './foundation-requests/foundation-requests.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

const routes: Routes = [
  { path: '', component: FoundationRequestsComponent },
  // ... otras rutas específicas del módulo
];

@NgModule({
  declarations: [
    FoundationRequestsComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule // Configura las rutas aquí
  ],
  exports: [
    FoundationRequestsComponent,
    RouterModule, // Exporta el RouterModule para que sea accesible desde otros módulos
  ]
})
export class ModeratorModulo { }
