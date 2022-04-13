import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotReturnToOriginComponent } from './robot-return-to-origin.component';

describe('RobotReturnToOriginComponent', () => {
  let component: RobotReturnToOriginComponent;
  let fixture: ComponentFixture<RobotReturnToOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotReturnToOriginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotReturnToOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
