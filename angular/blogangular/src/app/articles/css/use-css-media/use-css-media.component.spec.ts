import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCssMediaComponent } from './use-css-media.component';

describe('UseCssMediaComponent', () => {
  let component: UseCssMediaComponent;
  let fixture: ComponentFixture<UseCssMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseCssMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCssMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
