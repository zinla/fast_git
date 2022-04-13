import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueAjaxComponent } from './vue-ajax.component';

describe('VueAjaxComponent', () => {
  let component: VueAjaxComponent;
  let fixture: ComponentFixture<VueAjaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueAjaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
