import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeTwoBinaryTreesComponent } from './merge-two-binary-trees.component';

describe('MergeTwoBinaryTreesComponent', () => {
  let component: MergeTwoBinaryTreesComponent;
  let fixture: ComponentFixture<MergeTwoBinaryTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeTwoBinaryTreesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeTwoBinaryTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
