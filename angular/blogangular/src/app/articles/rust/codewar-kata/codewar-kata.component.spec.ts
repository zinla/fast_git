import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodewarKataComponent } from './codewar-kata.component';

describe('CodewarKataComponent', () => {
  let component: CodewarKataComponent;
  let fixture: ComponentFixture<CodewarKataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodewarKataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodewarKataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
