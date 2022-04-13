import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTutorialComponent } from './js-tutorial.component';

describe('JsTutorialComponent', () => {
  let component: JsTutorialComponent;
  let fixture: ComponentFixture<JsTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
