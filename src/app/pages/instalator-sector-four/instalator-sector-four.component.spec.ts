import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalatorSectorFourComponent } from './instalator-sector-four.component';

describe('InstalatorSectorFourComponent', () => {
  let component: InstalatorSectorFourComponent;
  let fixture: ComponentFixture<InstalatorSectorFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalatorSectorFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalatorSectorFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
