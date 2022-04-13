import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitGuideComponent } from './git-guide.component';

describe('GitGuideComponent', () => {
  let component: GitGuideComponent;
  let fixture: ComponentFixture<GitGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
