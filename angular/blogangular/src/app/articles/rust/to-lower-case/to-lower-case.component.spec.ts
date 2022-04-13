import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToLowerCaseComponent } from './to-lower-case.component';

describe('ToLowerCaseComponent', () => {
  let component: ToLowerCaseComponent;
  let fixture: ComponentFixture<ToLowerCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToLowerCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToLowerCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
