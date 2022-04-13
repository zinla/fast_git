import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximumDepthOfBinaryTreeComponent } from './maximum-depth-of-binary-tree.component';

describe('MaximumDepthOfBinaryTreeComponent', () => {
  let component: MaximumDepthOfBinaryTreeComponent;
  let fixture: ComponentFixture<MaximumDepthOfBinaryTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaximumDepthOfBinaryTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximumDepthOfBinaryTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
