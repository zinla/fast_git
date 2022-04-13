import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostParamsComponent } from './post-params.component';

describe('PostParamsComponent', () => {
  let component: PostParamsComponent;
  let fixture: ComponentFixture<PostParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
