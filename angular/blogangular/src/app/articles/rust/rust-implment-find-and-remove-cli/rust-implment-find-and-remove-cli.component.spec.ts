import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RustImplmentFindAndRemoveCliComponent } from './rust-implment-find-and-remove-cli.component';

describe('RustImplmentFindAndRemoveCliComponent', () => {
  let component: RustImplmentFindAndRemoveCliComponent;
  let fixture: ComponentFixture<RustImplmentFindAndRemoveCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RustImplmentFindAndRemoveCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RustImplmentFindAndRemoveCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
