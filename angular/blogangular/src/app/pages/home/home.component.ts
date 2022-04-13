import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any = this.dataService.get_data();

  //字符串转base64
  enCode(str: any) {
    // 对字符串进行编码
    var encode = str;
    // 对编码的字符串转化base64
    var base64 = btoa(encode);
    return base64;
  }

  // base64转字符串
  deCode(base64: any) {
    // 对base64转编码
    var decode = atob(base64);
    // 编码转字符串
    var str = decode;
    return str;
  }

  // data_aes:any = this.enCode(this.encryptoService.encrypt(JSON.stringify(this.data)));

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // console.log(this.data_aes);
    // console.log(this.encryptoService.decrypt(this.deCode(this.data_aes)));
  }
}
