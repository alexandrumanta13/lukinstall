import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BateriaDeChiuvetaCuSenzoriAvantajeSiDezavantajeComponent } from './bateria-de-chiuveta-cu-senzori-avantaje-si-dezavantaje.component';

describe('BateriaDeChiuvetaCuSenzoriAvantajeSiDezavantajeComponent', () => {
  let component: BateriaDeChiuvetaCuSenzoriAvantajeSiDezavantajeComponent;
  let fixture: ComponentFixture<BateriaDeChiuvetaCuSenzoriAvantajeSiDezavantajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriaDeChiuvetaCuSenzoriAvantajeSiDezavantajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BateriaDeChiuvetaCuSenzoriAvantajeSiDezavantajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
