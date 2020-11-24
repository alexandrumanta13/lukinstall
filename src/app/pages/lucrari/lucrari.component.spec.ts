import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LucrariComponent } from './lucrari.component';

describe('LucrariComponent', () => {
  let component: LucrariComponent;
  let fixture: ComponentFixture<LucrariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucrariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LucrariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
