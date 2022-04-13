import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseTypesComponent } from './parse-types.component';

describe('ParseTypesComponent', () => {
  let component: ParseTypesComponent;
  let fixture: ComponentFixture<ParseTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParseTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
