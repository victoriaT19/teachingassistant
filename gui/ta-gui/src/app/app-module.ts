import { AlunoService } from './aluno.service';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AlunosComponent } from './alunos.component';
import { MetasComponent } from './metas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    AlunosComponent,
    MetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AlunoService,
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
