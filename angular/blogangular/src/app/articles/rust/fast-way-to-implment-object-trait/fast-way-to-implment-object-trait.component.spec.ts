import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastWayToImplmentObjectTraitComponent } from './fast-way-to-implment-object-trait.component';

describe('FastWayToImplmentObjectTraitComponent', () => {
  let component: FastWayToImplmentObjectTraitComponent;
  let fixture: ComponentFixture<FastWayToImplmentObjectTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastWayToImplmentObjectTraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastWayToImplmentObjectTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
