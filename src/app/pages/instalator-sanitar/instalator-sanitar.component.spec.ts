import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalatorSanitarComponent } from './instalator-sanitar.component';

describe('InstalatorSanitarComponent', () => {
  let component: InstalatorSanitarComponent;
  let fixture: ComponentFixture<InstalatorSanitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalatorSanitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalatorSanitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
