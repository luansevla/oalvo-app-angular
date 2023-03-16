import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaInscricaoComponent } from './nova-inscricao/nova-inscricao.component';

const routes: Routes = [
  {
    path: '',
    component: NovaInscricaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscricoesRoutingModule { }