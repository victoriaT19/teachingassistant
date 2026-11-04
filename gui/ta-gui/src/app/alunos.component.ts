import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Aluno } from '../../../../common/aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  standalone: false,
  styleUrl: './alunos.component.css'
})
export class AlunosComponent implements OnInit {
  constructor(private alunoService: AlunoService, private cdr: ChangeDetectorRef) {}

  aluno: Aluno = new Aluno();
  alunos: Aluno[] = [];
  cpfduplicado: boolean = false;

  criarAluno(a: Aluno): void {
    this.alunoService.criar(a)
      .subscribe(
        ar => {
          if (ar) {
            this.alunos.push(ar);
            this.aluno = new Aluno();
          } else {
            this.cpfduplicado = true;
          }
          this.cdr.markForCheck();
        },
        msg => { alert(msg.message); }
      );
  }

  onMove(): void {
    this.cpfduplicado = false;
  }

  ngOnInit(): void {
    this.alunoService.getAlunos()
      .subscribe(
        as => { this.alunos = as; this.cdr.markForCheck(); },
        msg => { alert(msg.message); }
      );
  }
}
