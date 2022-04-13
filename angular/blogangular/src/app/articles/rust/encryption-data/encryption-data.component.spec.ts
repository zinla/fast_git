import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptionDataComponent } from './encryption-data.component';

describe('EncryptionDataComponent', () => {
  let component: EncryptionDataComponent;
  let fixture: ComponentFixture<EncryptionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncryptionDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
