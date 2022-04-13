import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['./vue.component.css'],
})
export class VueComponent implements OnInit {
  constructor(private dataService: DataService) {}
  data = this.dataService.get_data().filter(function (item: any) {
    if (item.category.split('&&').includes('vue')) {
      return item;
    }
  });
  ngOnInit(): void {
    // console.log(this.data);
  }
}
