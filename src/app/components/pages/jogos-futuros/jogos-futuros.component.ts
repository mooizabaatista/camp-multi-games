import {Component, OnInit} from '@angular/core';
import {JogosFuturos} from "../../../interfaces/jogos-futuros";
import {FuturoService} from "../../../services/futuro.service";

@Component({
  selector: 'app-jogos-futuros',
  templateUrl: './jogos-futuros.component.html',
  styleUrls: ['./jogos-futuros.component.css']
})
export class JogosFuturosComponent implements OnInit {

  futuros: JogosFuturos[] = [];

  ngOnInit(): void {
    this.getFuturos();
  }

  constructor(private futuroService: FuturoService) { }

  getFuturos(){
    this.futuroService.getFuturos().subscribe({
      next: (res: JogosFuturos[]) => {
        this.futuros = res;
        console.log(this.futuros);
        console.log("chegou");
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
