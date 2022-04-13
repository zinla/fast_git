import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdButtonsCheckboxComponent } from './ngbd-buttons-checkbox.component';

describe('NgbdButtonsCheckboxComponent', () => {
  let component: NgbdButtonsCheckboxComponent;
  let fixture: ComponentFixture<NgbdButtonsCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdButtonsCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdButtonsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
