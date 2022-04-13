import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonalSelectionAlgorithmComponent } from './clonal-selection-algorithm.component';

describe('ClonalSelectionAlgorithmComponent', () => {
  let component: ClonalSelectionAlgorithmComponent;
  let fixture: ComponentFixture<ClonalSelectionAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClonalSelectionAlgorithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonalSelectionAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
