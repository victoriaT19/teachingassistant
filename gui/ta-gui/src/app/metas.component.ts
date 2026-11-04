import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Aluno } from '../../../../common/aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  standalone: false,
  styleUrl: './metas.component.css'
})
export class MetasComponent implements OnInit {
  constructor(private alunoService: AlunoService, private cdr: ChangeDetectorRef) {}

  alunos: Aluno[] = [];

  atualizarAluno(aluno: Aluno): void {
    this.alunoService.atualizar(aluno).subscribe(
      (a) => { if (a == null) alert("Unexpected fatal error trying to update student information! Please contact the systems administratos."); },
      (msg) => { alert(msg.message); }
    );
  }

  ngOnInit(): void {
    this.alunoService.getAlunos()
      .subscribe(
        (as) => { this.alunos = as; this.cdr.markForCheck(); },
        (msg) => { alert(msg.message); }
      );
  }
}
