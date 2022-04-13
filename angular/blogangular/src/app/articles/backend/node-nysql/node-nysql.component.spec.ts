import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeNysqlComponent } from './node-nysql.component';

describe('NodeNysqlComponent', () => {
  let component: NodeNysqlComponent;
  let fixture: ComponentFixture<NodeNysqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeNysqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeNysqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
