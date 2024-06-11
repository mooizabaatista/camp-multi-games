import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RankingsComponent } from './components/pages/rankings/rankings.component';
import { JogosComponent } from './components/pages/jogos/jogos.component';
import { ResultadosComponent } from './components/pages/resultados/resultados.component';
import { TimesComponent } from './components/pages/times/times.component';
import { JogosFuturosComponent } from './components/pages/jogos-futuros/jogos-futuros.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { HeaderComponent } from './components/shared/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RankingsComponent,
    JogosComponent,
    ResultadosComponent,
    TimesComponent,
    JogosFuturosComponent,
    RankingComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
