import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeusdadosComponent } from './meusdados.component';

const routes: Routes = [
  {
    path: '',
    component: MeusdadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeusdadosRoutingModule { }
