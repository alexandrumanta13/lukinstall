import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciiConsultantaFiscalaContabilaComponent } from './servicii-consultanta-fiscala-contabila.component';

describe('ServiciiConsultantaFiscalaContabilaComponent', () => {
  let component: ServiciiConsultantaFiscalaContabilaComponent;
  let fixture: ComponentFixture<ServiciiConsultantaFiscalaContabilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciiConsultantaFiscalaContabilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciiConsultantaFiscalaContabilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
