import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiStringMatchComponent } from './di-string-match.component';

describe('DiStringMatchComponent', () => {
  let component: DiStringMatchComponent;
  let fixture: ComponentFixture<DiStringMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiStringMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiStringMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
