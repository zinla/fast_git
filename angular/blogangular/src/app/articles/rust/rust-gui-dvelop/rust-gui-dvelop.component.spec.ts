import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RustGuiDvelopComponent } from './rust-gui-dvelop.component';

describe('RustGuiDvelopComponent', () => {
  let component: RustGuiDvelopComponent;
  let fixture: ComponentFixture<RustGuiDvelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RustGuiDvelopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RustGuiDvelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
