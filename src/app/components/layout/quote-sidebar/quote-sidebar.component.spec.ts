import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSidebarComponent } from './quote-sidebar.component';

describe('QuoteSidebarComponent', () => {
  let component: QuoteSidebarComponent;
  let fixture: ComponentFixture<QuoteSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
