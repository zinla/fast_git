import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecompileComponent } from './precompile.component';

describe('PrecompileComponent', () => {
  let component: PrecompileComponent;
  let fixture: ComponentFixture<PrecompileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecompileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecompileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
