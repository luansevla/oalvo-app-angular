import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { EnrollmentsComponent } from './enrollments.component';
import { NovaInscricaoComponent } from './nova-inscricao/nova-inscricao.component';
import { InscricoesRoutingModule } from './enrollments-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EnrollmentsComponent,
    NovaInscricaoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    InscricoesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    EnrollmentsComponent,
    NovaInscricaoComponent
  ]
})
export class EnrollmentsModule { }
