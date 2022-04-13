import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmSolutionComponent } from './algorithm-solution.component';

describe('AlgorithmSolutionComponent', () => {
  let component: AlgorithmSolutionComponent;
  let fixture: ComponentFixture<AlgorithmSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgorithmSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
