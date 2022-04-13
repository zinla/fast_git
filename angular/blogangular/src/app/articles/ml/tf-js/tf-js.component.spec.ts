import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfJsComponent } from './tf-js.component';

describe('TfJsComponent', () => {
  let component: TfJsComponent;
  let fixture: ComponentFixture<TfJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TfJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
