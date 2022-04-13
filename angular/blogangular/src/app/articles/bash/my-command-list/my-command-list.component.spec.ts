import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCommandListComponent } from './my-command-list.component';

describe('MyCommandListComponent', () => {
  let component: MyCommandListComponent;
  let fixture: ComponentFixture<MyCommandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCommandListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCommandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
