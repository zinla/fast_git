import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereMyAnagramsAtComponent } from './where-my-anagrams-at.component';

describe('WhereMyAnagramsAtComponent', () => {
  let component: WhereMyAnagramsAtComponent;
  let fixture: ComponentFixture<WhereMyAnagramsAtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereMyAnagramsAtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereMyAnagramsAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
