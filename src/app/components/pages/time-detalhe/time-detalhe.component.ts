import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Time } from 'src/app/interfaces/time';
import { TimesService } from 'src/app/services/times.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-time-detalhe',
  templateUrl: './time-detalhe.component.html',
  styleUrls: ['./time-detalhe.component.css'],
})
export class TimeDetalheComponent {
  idRecebido!: number;
  timeDetalhe!: Time;

  constructor(
    private router: Router,
    private timeService: TimesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.idRecebido = this.getId();
    this.getTimeDetalhe();
  }

  getId(): number {
    return Number(this.router.url.split('/')[2]);
  }

  getTimeDetalhe() {
    this.timeService.getTimeDetalhe(this.idRecebido).subscribe({
      next: (res: Time) => {
        this.timeDetalhe = res;
        console.log(this.timeDetalhe);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  voltar() {
    this.location.back();
  }
}
