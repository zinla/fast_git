import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunJarComponent } from './run-jar.component';

describe('RunJarComponent', () => {
  let component: RunJarComponent;
  let fixture: ComponentFixture<RunJarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunJarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunJarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
