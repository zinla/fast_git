import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseIntegerComponent } from './reverse-integer.component';

describe('ReverseIntegerComponent', () => {
  let component: ReverseIntegerComponent;
  let fixture: ComponentFixture<ReverseIntegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseIntegerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseIntegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
