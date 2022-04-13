import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZigzagConversionComponent } from './zigzag-conversion.component';

describe('ZigzagConversionComponent', () => {
  let component: ZigzagConversionComponent;
  let fixture: ComponentFixture<ZigzagConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZigzagConversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZigzagConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
