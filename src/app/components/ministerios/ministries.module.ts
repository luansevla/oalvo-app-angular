import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinistriesComponent } from './ministries.component';
import { MaterialModule } from 'src/app/material/material.module';
import { EnrollmentsModule } from './inscricoes/enrollments.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MinistriesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EnrollmentsModule,
    ReactiveFormsModule
  ],
  exports: [
    MinistriesComponent
  ]
})
export class MinistriesModule { }
