import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciiContabilitatePfaIiIfComponent } from './servicii-contabilitate-pfa-ii-if.component';

describe('ServiciiContabilitatePfaIiIfComponent', () => {
  let component: ServiciiContabilitatePfaIiIfComponent;
  let fixture: ComponentFixture<ServiciiContabilitatePfaIiIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciiContabilitatePfaIiIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciiContabilitatePfaIiIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
