import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RustImplementTreeComponent } from './rust-implement-tree.component';

describe('RustImplementTreeComponent', () => {
  let component: RustImplementTreeComponent;
  let fixture: ComponentFixture<RustImplementTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RustImplementTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RustImplementTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
