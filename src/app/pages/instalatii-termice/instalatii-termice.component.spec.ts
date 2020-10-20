import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalatiiTermiceComponent } from './instalatii-termice.component';

describe('InstalatiiTermiceComponent', () => {
  let component: InstalatiiTermiceComponent;
  let fixture: ComponentFixture<InstalatiiTermiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalatiiTermiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalatiiTermiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
