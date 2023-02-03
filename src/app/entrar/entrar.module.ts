import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrarRoutingModule } from './entrar-routing.module';
import { EntrarComponent } from './entrar.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EntrarComponent
  ],
  imports: [
    CommonModule,
    EntrarRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class EntrarModule { }
