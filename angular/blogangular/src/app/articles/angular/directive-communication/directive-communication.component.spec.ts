import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveCommunicationComponent } from './directive-communication.component';

describe('DirectiveCommunicationComponent', () => {
  let component: DirectiveCommunicationComponent;
  let fixture: ComponentFixture<DirectiveCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
