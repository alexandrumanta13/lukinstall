import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesfundareCanalizareComponent } from './desfundare-canalizare.component';

describe('DesfundareCanalizareComponent', () => {
  let component: DesfundareCanalizareComponent;
  let fixture: ComponentFixture<DesfundareCanalizareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesfundareCanalizareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesfundareCanalizareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
