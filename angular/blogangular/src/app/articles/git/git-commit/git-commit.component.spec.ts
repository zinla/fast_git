import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCommitComponent } from './git-commit.component';

describe('GitCommitComponent', () => {
  let component: GitCommitComponent;
  let fixture: ComponentFixture<GitCommitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitCommitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
