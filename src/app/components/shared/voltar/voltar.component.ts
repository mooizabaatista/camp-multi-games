import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-voltar',
  templateUrl: './voltar.component.html',
  styleUrls: ['./voltar.component.css']
})
export class VoltarComponent implements OnInit {

  @Input() proprietaryOptional: string | undefined;

  constructor(private location: Location) {
  }

  voltar() {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
