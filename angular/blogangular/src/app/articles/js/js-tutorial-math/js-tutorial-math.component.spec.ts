import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTutorialMathComponent } from './js-tutorial-math.component';

describe('JsTutorialMathComponent', () => {
  let component: JsTutorialMathComponent;
  let fixture: ComponentFixture<JsTutorialMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsTutorialMathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsTutorialMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
