import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularJSTranscludeComponent } from './angular-js-transclude.component';

describe('AngularJSTranscludeComponent', () => {
  let component: AngularJSTranscludeComponent;
  let fixture: ComponentFixture<AngularJSTranscludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularJSTranscludeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularJSTranscludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
