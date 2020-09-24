import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldSiteSectionComponent } from './old-site-section.component';

describe('OldSiteSectionComponent', () => {
  let component: OldSiteSectionComponent;
  let fixture: ComponentFixture<OldSiteSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldSiteSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldSiteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
