import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertPesnComponent } from './convert-pesn.component';

describe('ConvertPesnComponent', () => {
  let component: ConvertPesnComponent;
  let fixture: ComponentFixture<ConvertPesnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertPesnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertPesnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
