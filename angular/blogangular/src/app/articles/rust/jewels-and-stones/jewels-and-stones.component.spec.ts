import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelsAndStonesComponent } from './jewels-and-stones.component';

describe('JewelsAndStonesComponent', () => {
  let component: JewelsAndStonesComponent;
  let fixture: ComponentFixture<JewelsAndStonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JewelsAndStonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelsAndStonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
