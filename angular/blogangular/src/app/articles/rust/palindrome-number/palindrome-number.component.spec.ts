import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeNumberComponent } from './palindrome-number.component';

describe('PalindromeNumberComponent', () => {
  let component: PalindromeNumberComponent;
  let fixture: ComponentFixture<PalindromeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalindromeNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
