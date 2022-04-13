import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameRouteReloadAngularComponent } from './same-route-reload-angular.component';

describe('SameRouteReloadAngularComponent', () => {
  let component: SameRouteReloadAngularComponent;
  let fixture: ComponentFixture<SameRouteReloadAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SameRouteReloadAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SameRouteReloadAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
