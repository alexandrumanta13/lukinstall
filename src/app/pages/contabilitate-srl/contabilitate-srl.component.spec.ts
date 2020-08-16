import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContabilitateSrlComponent } from './contabilitate-srl.component';

describe('ContabilitateSrlComponent', () => {
  let component: ContabilitateSrlComponent;
  let fixture: ComponentFixture<ContabilitateSrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContabilitateSrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContabilitateSrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
