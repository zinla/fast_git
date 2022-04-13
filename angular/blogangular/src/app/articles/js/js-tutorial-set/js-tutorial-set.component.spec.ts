import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTutorialSetComponent } from './js-tutorial-set.component';

describe('JsTutorialSetComponent', () => {
  let component: JsTutorialSetComponent;
  let fixture: ComponentFixture<JsTutorialSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsTutorialSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsTutorialSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
