import { Component, signal } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Teaching Assistant');
  aluno: Aluno = {nome: "", cpf: "", email: "", github: ""};
  alunoService = new AlunoService();
  alunos: Aluno[] = [];

  gravar(a: Aluno): void {
    if (this.alunoService.gravar(a)) {
      this.alunos.push(a);
      this.aluno = {nome: "", cpf: "", email: "", github: ""};
    } else {
      this.aluno.cpf = "";
    }
  }
}
