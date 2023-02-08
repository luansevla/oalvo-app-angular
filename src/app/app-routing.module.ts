import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'entrar',
    loadChildren: () => import('./entrar/entrar.module').then(m => m.EntrarModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then(m => m.RegistrarModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/inicio/inicio.module').then(m => m.InicioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
