import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-rust',
  templateUrl: './rust.component.html',
  styleUrls: ['./rust.component.css'],
})
export class RustComponent implements OnInit {
  constructor(private dataService: DataService) {}
  data = this.dataService.get_data().filter(function (item: any) {
    if (item.category.split('&&').includes('rs')) {
      return item;
    }
  });
  ngOnInit(): void {
    // console.log(this.data);
  }
}
