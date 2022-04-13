import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WechatTimimgMessageComponent } from './wechat-timimg-message.component';

describe('WechatTimimgMessageComponent', () => {
  let component: WechatTimimgMessageComponent;
  let fixture: ComponentFixture<WechatTimimgMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WechatTimimgMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WechatTimimgMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
