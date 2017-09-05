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
  constructor(private alunoService: AlunoService) {}

  protected readonly title = signal('Teaching Assistant');
  aluno: Aluno = new Aluno();
  alunos: Aluno[] = [];
  cpfduplicado: boolean = false;

  criarAluno(a: Aluno): void {
    if (this.alunoService.criar(a)) {
      this.alunos.push(a);
      this.aluno = new Aluno();
    } else {
      this.cpfduplicado = true;
    }
  }

  onMove(): void {
    this.cpfduplicado = false;
  }

  atualizarAluno(aluno: Aluno): void {
    this.alunoService.atualizar(aluno);
  }
}
