import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerCommunicationComponent } from './controller-communication.component';

describe('ControllerCommunicationComponent', () => {
  let component: ControllerCommunicationComponent;
  let fixture: ComponentFixture<ControllerCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllerCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
