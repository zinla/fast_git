import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css'],
})
export class PythonComponent implements OnInit {
  constructor(private dataService: DataService) {}
  data = this.dataService.get_data().filter(function (item: any) {
    if (item.category.split('&&').includes('py')) {
      return item;
    }
  });
  ngOnInit(): void {
    // console.log(this.data);
  }
}
