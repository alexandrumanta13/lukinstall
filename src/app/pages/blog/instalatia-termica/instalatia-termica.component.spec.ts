import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalatiaTermicaComponent } from './instalatia-termica.component';

describe('InstalatiaTermicaComponent', () => {
  let component: InstalatiaTermicaComponent;
  let fixture: ComponentFixture<InstalatiaTermicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalatiaTermicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalatiaTermicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
