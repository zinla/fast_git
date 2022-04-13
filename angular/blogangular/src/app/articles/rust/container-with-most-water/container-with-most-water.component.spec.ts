import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerWithMostWaterComponent } from './container-with-most-water.component';

describe('ContainerWithMostWaterComponent', () => {
  let component: ContainerWithMostWaterComponent;
  let fixture: ComponentFixture<ContainerWithMostWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerWithMostWaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerWithMostWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
