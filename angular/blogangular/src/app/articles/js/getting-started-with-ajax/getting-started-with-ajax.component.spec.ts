import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedWithAjaxComponent } from './getting-started-with-ajax.component';

describe('GettingStartedWithAjaxComponent', () => {
  let component: GettingStartedWithAjaxComponent;
  let fixture: ComponentFixture<GettingStartedWithAjaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettingStartedWithAjaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedWithAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
