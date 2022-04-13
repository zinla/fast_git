import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.css'],
})
export class DataStructureComponent implements OnInit {
  constructor(private dataService: DataService) {}
  data = this.dataService.get_data().filter(function (item: any) {
    if (item.category.split('&&').includes('ds')) {
      return item;
    }
  });
  ngOnInit(): void {
    // console.log(this.data);
  }
}
