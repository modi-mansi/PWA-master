import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule, MatButtonModule, MatSlideToggleModule, MatCardModule, MatExpansionModule,
  MatFormFieldModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
