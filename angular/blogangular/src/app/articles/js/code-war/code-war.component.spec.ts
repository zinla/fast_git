import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeWarComponent } from './code-war.component';

describe('CodeWarComponent', () => {
  let component: CodeWarComponent;
  let fixture: ComponentFixture<CodeWarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeWarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeWarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
