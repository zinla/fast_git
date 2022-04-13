import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RustImplmentMatrixComponent } from './rust-implment-matrix.component';

describe('RustImplmentMatrixComponent', () => {
  let component: RustImplmentMatrixComponent;
  let fixture: ComponentFixture<RustImplmentMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RustImplmentMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RustImplmentMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
