import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoInfoTimesComponent } from './resultado-info-times.component';

describe('ResultadoInfoTimesComponent', () => {
  let component: ResultadoInfoTimesComponent;
  let fixture: ComponentFixture<ResultadoInfoTimesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoInfoTimesComponent]
    });
    fixture = TestBed.createComponent(ResultadoInfoTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
