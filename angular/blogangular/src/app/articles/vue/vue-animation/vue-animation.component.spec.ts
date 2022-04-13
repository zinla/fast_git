import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueAnimationComponent } from './vue-animation.component';

describe('VueAnimationComponent', () => {
  let component: VueAnimationComponent;
  let fixture: ComponentFixture<VueAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
