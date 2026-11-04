import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Teaching Assistant');
    aluno: Aluno = {nome: "Maria", cpf: "123", email: "maria@x.com", github: ""};
}

export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  github: string;
}
