import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarizareResurseUmaneComponent } from './salarizare-resurse-umane.component';

describe('SalarizareResurseUmaneComponent', () => {
  let component: SalarizareResurseUmaneComponent;
  let fixture: ComponentFixture<SalarizareResurseUmaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarizareResurseUmaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarizareResurseUmaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
