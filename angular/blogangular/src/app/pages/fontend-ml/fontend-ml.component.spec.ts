import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontendMlComponent } from './fontend-ml.component';

describe('FontendMlComponent', () => {
  let component: FontendMlComponent;
  let fixture: ComponentFixture<FontendMlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontendMlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontendMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
