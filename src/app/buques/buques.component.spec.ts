import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuquesComponent } from './buques.component';

describe('BuquesComponent', () => {
  let component: BuquesComponent;
  let fixture: ComponentFixture<BuquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
