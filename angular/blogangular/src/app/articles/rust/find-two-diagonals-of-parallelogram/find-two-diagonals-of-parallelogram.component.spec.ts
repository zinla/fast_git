import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTwoDiagonalsOfParallelogramComponent } from './find-two-diagonals-of-parallelogram.component';

describe('FindTwoDiagonalsOfParallelogramComponent', () => {
  let component: FindTwoDiagonalsOfParallelogramComponent;
  let fixture: ComponentFixture<FindTwoDiagonalsOfParallelogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindTwoDiagonalsOfParallelogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTwoDiagonalsOfParallelogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
