import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoSumComponent } from './two-sum.component';

describe('TwoSumComponent', () => {
  let component: TwoSumComponent;
  let fixture: ComponentFixture<TwoSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoSumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
