import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNotesComponent } from './directive-notes.component';

describe('DirectiveNotesComponent', () => {
  let component: DirectiveNotesComponent;
  let fixture: ComponentFixture<DirectiveNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
