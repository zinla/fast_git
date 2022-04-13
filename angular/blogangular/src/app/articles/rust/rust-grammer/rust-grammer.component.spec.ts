import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RustGrammerComponent } from './rust-grammer.component';

describe('RustGrammerComponent', () => {
  let component: RustGrammerComponent;
  let fixture: ComponentFixture<RustGrammerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RustGrammerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RustGrammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
