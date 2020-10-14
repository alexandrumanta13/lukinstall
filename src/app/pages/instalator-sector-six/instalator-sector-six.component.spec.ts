import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalatorSectorSixComponent } from './instalator-sector-six.component';

describe('InstalatorSectorSixComponent', () => {
  let component: InstalatorSectorSixComponent;
  let fixture: ComponentFixture<InstalatorSectorSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalatorSectorSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalatorSectorSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
