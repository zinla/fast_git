import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolIntComponent } from './bool-int.component';

describe('BoolIntComponent', () => {
  let component: BoolIntComponent;
  let fixture: ComponentFixture<BoolIntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoolIntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoolIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
