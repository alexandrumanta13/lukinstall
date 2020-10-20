import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalatorNonStopComponent } from './instalator-non-stop.component';

describe('InstalatorNonStopComponent', () => {
  let component: InstalatorNonStopComponent;
  let fixture: ComponentFixture<InstalatorNonStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalatorNonStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalatorNonStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
