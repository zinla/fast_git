import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueEmailAddressesComponent } from './unique-email-addresses.component';

describe('UniqueEmailAddressesComponent', () => {
  let component: UniqueEmailAddressesComponent;
  let fixture: ComponentFixture<UniqueEmailAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueEmailAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueEmailAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
