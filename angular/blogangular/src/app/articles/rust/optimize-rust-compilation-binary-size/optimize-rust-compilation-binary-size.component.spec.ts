import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizeRustCompilationBinarySizeComponent } from './optimize-rust-compilation-binary-size.component';

describe('OptimizeRustCompilationBinarySizeComponent', () => {
  let component: OptimizeRustCompilationBinarySizeComponent;
  let fixture: ComponentFixture<OptimizeRustCompilationBinarySizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimizeRustCompilationBinarySizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimizeRustCompilationBinarySizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
