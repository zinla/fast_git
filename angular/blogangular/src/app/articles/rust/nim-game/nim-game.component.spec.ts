import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NimGameComponent } from './nim-game.component';

describe('NimGameComponent', () => {
  let component: NimGameComponent;
  let fixture: ComponentFixture<NimGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NimGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NimGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
