import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegerToRomanComponent } from './integer-to-roman.component';

describe('IntegerToRomanComponent', () => {
  let component: IntegerToRomanComponent;
  let fixture: ComponentFixture<IntegerToRomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegerToRomanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegerToRomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
