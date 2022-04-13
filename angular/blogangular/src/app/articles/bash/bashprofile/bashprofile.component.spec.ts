import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BashprofileComponent } from './bashprofile.component';

describe('BashprofileComponent', () => {
  let component: BashprofileComponent;
  let fixture: ComponentFixture<BashprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BashprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BashprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
