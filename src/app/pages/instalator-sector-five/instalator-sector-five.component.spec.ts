import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalatorSectorFiveComponent } from './instalator-sector-five.component';

describe('InstalatorSectorFiveComponent', () => {
  let component: InstalatorSectorFiveComponent;
  let fixture: ComponentFixture<InstalatorSectorFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalatorSectorFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalatorSectorFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
