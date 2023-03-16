import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentsComponent } from './inscricoes/enrollments.component';
import { NovaInscricaoComponent } from './inscricoes/nova-inscricao/nova-inscricao.component';

const routes: Routes = [
  {
    path: 'inscricoes',
    component: EnrollmentsComponent,
    children: [
      {
        path: 'nova',
        component: NovaInscricaoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinistriesRoutingModule { }