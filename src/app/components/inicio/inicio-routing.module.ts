import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { EntrarComponent } from '../../entrar/entrar.component';
import { RegistrarComponent } from '../../registrar/registrar.component';
import { EventosComponent } from '../eventos/eventos.component';
import { MeusdadosComponent } from '../meusdados/meusdados.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: 'eventos',
        component: EventosComponent,
      },
      {
        path: 'meusdados',
        component: MeusdadosComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
