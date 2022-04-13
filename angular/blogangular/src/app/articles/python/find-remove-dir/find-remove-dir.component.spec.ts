import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRemoveDirComponent } from './find-remove-dir.component';

describe('FindRemoveDirComponent', () => {
  let component: FindRemoveDirComponent;
  let fixture: ComponentFixture<FindRemoveDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindRemoveDirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRemoveDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
