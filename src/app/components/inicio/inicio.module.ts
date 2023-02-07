import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { MaterialModule } from '../../material/material.module';
import { MeusdadosComponent } from '../meusdados/meusdados.component';
import { EventosComponent } from '../eventos/eventos.component';
import { UsersService } from '../../../../../oalvo-app/src/app/core/api/users.service';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    InicioComponent,
    MeusdadosComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule,
    MatNativeDateModule
  ]
})
export class InicioModule { }
