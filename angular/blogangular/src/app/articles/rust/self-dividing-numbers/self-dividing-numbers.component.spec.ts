import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfDividingNumbersComponent } from './self-dividing-numbers.component';

describe('SelfDividingNumbersComponent', () => {
  let component: SelfDividingNumbersComponent;
  let fixture: ComponentFixture<SelfDividingNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfDividingNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfDividingNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
