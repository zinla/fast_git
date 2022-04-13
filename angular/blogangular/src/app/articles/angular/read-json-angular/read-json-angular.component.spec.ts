import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadJsonAngularComponent } from './read-json-angular.component';

describe('ReadJsonAngularComponent', () => {
  let component: ReadJsonAngularComponent;
  let fixture: ComponentFixture<ReadJsonAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadJsonAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadJsonAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
