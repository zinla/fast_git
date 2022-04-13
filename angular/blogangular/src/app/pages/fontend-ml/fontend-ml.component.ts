import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-fontend-ml',
  templateUrl: './fontend-ml.component.html',
  styleUrls: ['./fontend-ml.component.css'],
})
export class FontendMlComponent implements OnInit {
  constructor(private dataService: DataService) {}
  data = this.dataService.get_data().filter(function (item: any) {
    if (item.category.split('&&').includes('ml')) {
      return item;
    }
  });
  ngOnInit(): void {
    // console.log(this.data);
  }
}
