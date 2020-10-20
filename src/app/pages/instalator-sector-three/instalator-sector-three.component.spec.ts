import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalatorSectorThreeComponent } from './instalator-sector-three.component';

describe('InstalatorSectorThreeComponent', () => {
  let component: InstalatorSectorThreeComponent;
  let fixture: ComponentFixture<InstalatorSectorThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalatorSectorThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalatorSectorThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
