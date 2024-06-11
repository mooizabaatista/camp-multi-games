import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingsComponent } from './components/pages/rankings/rankings.component';
import { JogosComponent } from './components/pages/jogos/jogos.component';
import { ResultadosComponent } from './components/pages/resultados/resultados.component';
import { TimesComponent } from './components/pages/times/times.component';
import { JogosFuturosComponent } from './components/pages/jogos-futuros/jogos-futuros.component';

const routes: Routes = [
  { path: '', component: RankingsComponent },
  { path: 'jogos', component: JogosComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'times', component: TimesComponent },
  { path: 'jogos-futuros', component: JogosFuturosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
