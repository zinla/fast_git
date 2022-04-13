import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css'],
})
export class ReactComponent implements OnInit {
  constructor(private dataService: DataService) {}
  data = this.dataService.get_data().filter(function (item: any) {
    if (item.category.split('&&').includes('react')) {
      return item;
    }
  });
  ngOnInit(): void {
    // console.log(this.data);
  }
}
