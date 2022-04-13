import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringToIntegerComponent } from './string-to-integer.component';

describe('StringToIntegerComponent', () => {
  let component: StringToIntegerComponent;
  let fixture: ComponentFixture<StringToIntegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringToIntegerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringToIntegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
