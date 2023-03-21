import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { EventosComponent } from '../eventos/eventos.component';
import { MeusdadosComponent } from '../meusdados/meusdados.component';
import { EnrollmentsComponent } from '../ministerios/inscricoes/enrollments.component';
import { NovaInscricaoComponent } from '../ministerios/inscricoes/nova-inscricao/nova-inscricao.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';

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
        path: 'usuarios',
        component: UsuariosComponent,
      },
      {
        path: 'meusdados',
        component: MeusdadosComponent,
      },
      {
        path: 'ministerio/inscricoes',
        component: EnrollmentsComponent
      },
      {
        path: 'ministerio/inscricoes/nova',
        component: NovaInscricaoComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
