import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleThreadAndAsynchronousComponent } from './single-thread-and-asynchronous.component';

describe('SingleThreadAndAsynchronousComponent', () => {
  let component: SingleThreadAndAsynchronousComponent;
  let fixture: ComponentFixture<SingleThreadAndAsynchronousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleThreadAndAsynchronousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleThreadAndAsynchronousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
