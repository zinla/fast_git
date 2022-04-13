import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressRustBinarySizeComponent } from './compress-rust-binary-size.component';

describe('CompressRustBinarySizeComponent', () => {
  let component: CompressRustBinarySizeComponent;
  let fixture: ComponentFixture<CompressRustBinarySizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompressRustBinarySizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressRustBinarySizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
