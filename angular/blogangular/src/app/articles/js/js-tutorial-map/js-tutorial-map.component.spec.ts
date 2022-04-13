import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTutorialMapComponent } from './js-tutorial-map.component';

describe('JsTutorialMapComponent', () => {
  let component: JsTutorialMapComponent;
  let fixture: ComponentFixture<JsTutorialMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsTutorialMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsTutorialMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
