import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactThisComponent } from './react-this.component';

describe('ReactThisComponent', () => {
  let component: ReactThisComponent;
  let fixture: ComponentFixture<ReactThisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactThisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
