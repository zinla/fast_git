import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementAesEncryptionComponent } from './implement-aes-encryption.component';

describe('ImplementAesEncryptionComponent', () => {
  let component: ImplementAesEncryptionComponent;
  let fixture: ComponentFixture<ImplementAesEncryptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplementAesEncryptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementAesEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
