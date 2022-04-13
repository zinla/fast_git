import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLearnCreatingCustomDirectivesComponent } from './angular-learn-creating-custom-directives.component';

describe('AngularLearnCreatingCustomDirectivesComponent', () => {
  let component: AngularLearnCreatingCustomDirectivesComponent;
  let fixture: ComponentFixture<AngularLearnCreatingCustomDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLearnCreatingCustomDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLearnCreatingCustomDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
