import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeusdadosRoutingModule } from './meusdados-routing.module';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MeusdadosRoutingModule,
    MaterialModule
  ],
  exports: [],
  providers: []
})
export class MeusdadosModule { }
