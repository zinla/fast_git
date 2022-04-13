import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css'],
})
export class JavaComponent implements OnInit {
  constructor(private dataService: DataService) {}
  data = this.dataService.get_data().filter(function (item: any) {
    if (item.category.split('&&').includes('java')) {
      return item;
    }
  });
  ngOnInit(): void {
    // console.log(this.data);
  }
}
