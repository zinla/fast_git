import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from 'src/app/service/data.service';
import { EncryptoService } from 'src/app/service/encrypto.service';

import { KatexOptions } from 'ngx-markdown';

@Component({
  selector: 'app-rust-gui-dvelop',
  templateUrl: './rust-gui-dvelop.component.html',
  styleUrls: ['./rust-gui-dvelop.component.css'],
})
export class RustGuiDvelopComponent implements OnInit {
  public options: KatexOptions = {
    displayMode: true,
    throwOnError: false,
    errorColor: '#cc0000',
  };
  constructor(
    private router: Router,
    private encryptoService: EncryptoService,
    private dataService: DataService
  ) {}

  // get_aes =this.router.url.split("q=")[1].toString();

  data: any = this.dataService.get_data();
  ngOnInit(): void {
    // console.log(this.data);
  }
}
