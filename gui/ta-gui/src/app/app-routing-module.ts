import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { MetasComponent } from './metas.component';

const routes: Routes = [
  { path: 'alunos', component: AlunosComponent },
  { path: 'metas', component: MetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
