import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalatorBucurestiComponent } from './instalator-bucuresti.component';

describe('InstalatorBucurestiComponent', () => {
  let component: InstalatorBucurestiComponent;
  let fixture: ComponentFixture<InstalatorBucurestiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalatorBucurestiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalatorBucurestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
