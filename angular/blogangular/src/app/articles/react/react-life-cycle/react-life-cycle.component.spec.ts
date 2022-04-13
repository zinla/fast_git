import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactLifeCycleComponent } from './react-life-cycle.component';

describe('ReactLifeCycleComponent', () => {
  let component: ReactLifeCycleComponent;
  let fixture: ComponentFixture<ReactLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactLifeCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
