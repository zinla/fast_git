import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsImplmentMusicPlayerComponent } from './js-implment-music-player.component';

describe('JsImplmentMusicPlayerComponent', () => {
  let component: JsImplmentMusicPlayerComponent;
  let fixture: ComponentFixture<JsImplmentMusicPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsImplmentMusicPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsImplmentMusicPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
