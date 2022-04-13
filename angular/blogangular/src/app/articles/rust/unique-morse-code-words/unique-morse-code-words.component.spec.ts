import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueMorseCodeWordsComponent } from './unique-morse-code-words.component';

describe('UniqueMorseCodeWordsComponent', () => {
  let component: UniqueMorseCodeWordsComponent;
  let fixture: ComponentFixture<UniqueMorseCodeWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueMorseCodeWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueMorseCodeWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
