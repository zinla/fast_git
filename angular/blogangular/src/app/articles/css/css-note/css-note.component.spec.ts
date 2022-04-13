import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssNoteComponent } from './css-note.component';

describe('CssNoteComponent', () => {
  let component: CssNoteComponent;
  let fixture: ComponentFixture<CssNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
