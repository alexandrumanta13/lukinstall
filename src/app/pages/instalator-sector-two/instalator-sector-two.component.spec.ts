import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalatorSectorTwoComponent } from './instalator-sector-two.component';

describe('InstalatorSectorTwoComponent', () => {
  let component: InstalatorSectorTwoComponent;
  let fixture: ComponentFixture<InstalatorSectorTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalatorSectorTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalatorSectorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
