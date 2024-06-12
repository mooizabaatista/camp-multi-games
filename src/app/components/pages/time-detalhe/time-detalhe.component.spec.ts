import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDetalheComponent } from './time-detalhe.component';

describe('TimeDetalheComponent', () => {
  let component: TimeDetalheComponent;
  let fixture: ComponentFixture<TimeDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeDetalheComponent]
    });
    fixture = TestBed.createComponent(TimeDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
