import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLearnWatchComponent } from './angular-learn-watch.component';

describe('AngularLearnWatchComponent', () => {
  let component: AngularLearnWatchComponent;
  let fixture: ComponentFixture<AngularLearnWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLearnWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLearnWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
