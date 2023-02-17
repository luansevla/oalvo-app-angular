import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { MaterialModule } from '../../material/material.module';
import { MeusdadosComponent } from '../meusdados/meusdados.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CdkTableModule, DataSource } from '@angular/cdk/table';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    InicioComponent,
    MeusdadosComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule,
    MatNativeDateModule,
    CdkTableModule,
    MatExpansionModule
  ]
})
export class InicioModule { }
