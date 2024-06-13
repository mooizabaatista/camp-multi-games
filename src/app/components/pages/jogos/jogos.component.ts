import { Component } from '@angular/core';
import { Jogo } from 'src/app/interfaces/jogo';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css'],
})
export class JogosComponent {
  constructor(private jogoService: JogoService) {}

  ngOnInit(): void {
    this.getJogos();
  }

  jogos: Jogo[] = [];

  getJogos() {
    this.jogoService.getJogos().subscribe({
      next: (jogos: Jogo[]) => {
        this.jogos = jogos;
        console.log(jogos);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
