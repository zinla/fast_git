import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTutorialObjectComponent } from './js-tutorial-object.component';

describe('JsTutorialObjectComponent', () => {
  let component: JsTutorialObjectComponent;
  let fixture: ComponentFixture<JsTutorialObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsTutorialObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsTutorialObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
