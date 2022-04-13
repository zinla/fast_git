import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameTreeComponent } from './same-tree.component';

describe('SameTreeComponent', () => {
  let component: SameTreeComponent;
  let fixture: ComponentFixture<SameTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SameTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SameTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
