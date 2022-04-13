import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTwoNumbersComponent } from './add-two-numbers.component';

describe('AddTwoNumbersComponent', () => {
  let component: AddTwoNumbersComponent;
  let fixture: ComponentFixture<AddTwoNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTwoNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTwoNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
