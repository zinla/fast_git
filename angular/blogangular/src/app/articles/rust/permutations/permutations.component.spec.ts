import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutationsComponent } from './permutations.component';

describe('PermutationsComponent', () => {
  let component: PermutationsComponent;
  let fixture: ComponentFixture<PermutationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermutationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermutationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
