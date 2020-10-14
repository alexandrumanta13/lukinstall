import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalatorSectorOneComponent } from './instalator-sector-one.component';

describe('InstalatorSectorOneComponent', () => {
  let component: InstalatorSectorOneComponent;
  let fixture: ComponentFixture<InstalatorSectorOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalatorSectorOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalatorSectorOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
