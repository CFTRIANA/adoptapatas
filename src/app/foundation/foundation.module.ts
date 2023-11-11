import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DogRegistrationComponent } from './dog-registration/dog-registration.component';
import { FoundationService } from './foundation.service';

const routes: Routes = [
  { path: '', component: DogRegistrationComponent},
  // Puedes agregar más rutas relacionadas con la fundación si es necesario
];

@NgModule({
  declarations: [
    DogRegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: [
    FoundationService
  ],
  exports: [
    RouterModule,
    DogRegistrationComponent
  ]
})
export class FoundationModule { }
