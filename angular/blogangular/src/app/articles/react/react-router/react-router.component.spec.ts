import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactRouterComponent } from './react-router.component';

describe('ReactRouterComponent', () => {
  let component: ReactRouterComponent;
  let fixture: ComponentFixture<ReactRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
