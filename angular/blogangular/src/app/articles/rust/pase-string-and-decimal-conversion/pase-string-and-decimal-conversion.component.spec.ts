import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseStringAndDecimalConversionComponent } from './pase-string-and-decimal-conversion.component';

describe('PaseStringAndDecimalConversionComponent', () => {
  let component: PaseStringAndDecimalConversionComponent;
  let fixture: ComponentFixture<PaseStringAndDecimalConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaseStringAndDecimalConversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaseStringAndDecimalConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
