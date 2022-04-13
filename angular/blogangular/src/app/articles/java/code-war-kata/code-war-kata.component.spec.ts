import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeWarKataComponent } from './code-war-kata.component';

describe('CodeWarKataComponent', () => {
  let component: CodeWarKataComponent;
  let fixture: ComponentFixture<CodeWarKataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeWarKataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeWarKataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
