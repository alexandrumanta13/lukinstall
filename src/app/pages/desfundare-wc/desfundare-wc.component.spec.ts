import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesfundareWcComponent } from './desfundare-wc.component';

describe('DesfundareWcComponent', () => {
  let component: DesfundareWcComponent;
  let fixture: ComponentFixture<DesfundareWcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesfundareWcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesfundareWcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
