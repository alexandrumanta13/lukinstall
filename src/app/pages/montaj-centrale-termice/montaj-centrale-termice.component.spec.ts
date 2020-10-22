import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontajCentraleTermiceComponent } from './montaj-centrale-termice.component';

describe('MontajCentraleTermiceComponent', () => {
  let component: MontajCentraleTermiceComponent;
  let fixture: ComponentFixture<MontajCentraleTermiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontajCentraleTermiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontajCentraleTermiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
