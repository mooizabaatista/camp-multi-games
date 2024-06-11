import { Component, OnInit } from '@angular/core';
import { Time } from 'src/app/interfaces/time';
import { TimesService } from 'src/app/services/times.service';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit{

  times: Time[] = [];
  constructor(private timeService: TimesService) { }

  ngOnInit(): void {
    this.getTimes();
  }


  getTimes() {
    this.timeService.getTimes().subscribe({
      next: ((res : Time[]) => {
        this.times = res;
      })
    })
  }
}
