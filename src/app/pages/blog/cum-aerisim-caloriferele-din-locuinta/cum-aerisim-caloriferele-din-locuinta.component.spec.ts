import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumAerisimCalorifereleDinLocuintaComponent } from './cum-aerisim-caloriferele-din-locuinta.component';

describe('CumAerisimCalorifereleDinLocuintaComponent', () => {
  let component: CumAerisimCalorifereleDinLocuintaComponent;
  let fixture: ComponentFixture<CumAerisimCalorifereleDinLocuintaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumAerisimCalorifereleDinLocuintaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumAerisimCalorifereleDinLocuintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
