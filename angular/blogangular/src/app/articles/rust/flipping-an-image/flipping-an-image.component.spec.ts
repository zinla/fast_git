import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlippingAnImageComponent } from './flipping-an-image.component';

describe('FlippingAnImageComponent', () => {
  let component: FlippingAnImageComponent;
  let fixture: ComponentFixture<FlippingAnImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlippingAnImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlippingAnImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
