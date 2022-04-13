import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsThisComponent } from './js-this.component';

describe('JsThisComponent', () => {
  let component: JsThisComponent;
  let fixture: ComponentFixture<JsThisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsThisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
