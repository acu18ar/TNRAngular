import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbuquesComponent } from './addbuques.component';

describe('AddbuquesComponent', () => {
  let component: AddbuquesComponent;
  let fixture: ComponentFixture<AddbuquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbuquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbuquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
