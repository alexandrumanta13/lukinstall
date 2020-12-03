import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiuvetaPotrivitaPentruBaiaTaComponent } from './chiuveta-potrivita-pentru-baia-ta.component';

describe('ChiuvetaPotrivitaPentruBaiaTaComponent', () => {
  let component: ChiuvetaPotrivitaPentruBaiaTaComponent;
  let fixture: ComponentFixture<ChiuvetaPotrivitaPentruBaiaTaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiuvetaPotrivitaPentruBaiaTaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiuvetaPotrivitaPentruBaiaTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
