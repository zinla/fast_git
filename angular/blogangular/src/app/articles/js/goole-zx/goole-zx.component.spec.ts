import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooleZxComponent } from './goole-zx.component';

describe('GooleZxComponent', () => {
  let component: GooleZxComponent;
  let fixture: ComponentFixture<GooleZxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooleZxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooleZxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
