import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickContactFormComponent } from './quick-contact-form.component';

describe('QuickContactFormComponent', () => {
  let component: QuickContactFormComponent;
  let fixture: ComponentFixture<QuickContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
