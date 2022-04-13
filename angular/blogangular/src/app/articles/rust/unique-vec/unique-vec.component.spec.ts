import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueVecComponent } from './unique-vec.component';

describe('UniqueVecComponent', () => {
  let component: UniqueVecComponent;
  let fixture: ComponentFixture<UniqueVecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueVecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueVecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
