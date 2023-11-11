import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptionComponent } from './adoption/adoption.component';

@NgModule({
  declarations: [
    AdoptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdoptionComponent
  ]
})
export class AdoptionModule { }
