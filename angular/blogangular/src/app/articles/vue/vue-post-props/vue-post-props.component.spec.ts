import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuePostPropsComponent } from './vue-post-props.component';

describe('VuePostPropsComponent', () => {
  let component: VuePostPropsComponent;
  let fixture: ComponentFixture<VuePostPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuePostPropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VuePostPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
