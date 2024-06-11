import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosFuturosComponent } from './jogos-futuros.component';

describe('JogosFuturosComponent', () => {
  let component: JogosFuturosComponent;
  let fixture: ComponentFixture<JogosFuturosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JogosFuturosComponent]
    });
    fixture = TestBed.createComponent(JogosFuturosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
