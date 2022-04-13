import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementTrieDataStructureComponent } from './implement-trie-data-structure.component';

describe('ImplementTrieDataStructureComponent', () => {
  let component: ImplementTrieDataStructureComponent;
  let fixture: ComponentFixture<ImplementTrieDataStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplementTrieDataStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementTrieDataStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
