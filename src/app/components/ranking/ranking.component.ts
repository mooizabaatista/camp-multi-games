import { Component, OnInit } from '@angular/core';
import { Ranking } from 'src/app/interfaces/ranking';
import { RankingService } from 'src/app/services/ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  constructor(private rankingService: RankingService) {}

  rankingGeral: Ranking[] = [];
  collapseIds: string[] = [];

  ngOnInit(): void {
    this.getRanking();
  }

  getRanking() {
    this.rankingService.getRanking().subscribe({
      next: (response: Ranking[]) => {
        this.rankingGeral = response;
        console.log(this.rankingGeral);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
