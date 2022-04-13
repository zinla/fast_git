import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-bash',
  templateUrl: './bash.component.html',
  styleUrls: ['./bash.component.css'],
})
export class BashComponent implements OnInit {
  constructor(private dataService: DataService) {}
  data = this.dataService.get_data().filter(function (item: any) {
    if (item.category.split('&&').includes('sh')) {
      return item;
    }
  });
  ngOnInit(): void {
    // console.log(this.data);
  }
}
