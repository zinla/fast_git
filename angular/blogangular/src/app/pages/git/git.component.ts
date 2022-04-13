import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css'],
})
export class GitComponent implements OnInit {
  constructor(private dataService: DataService) {}
  data = this.dataService.get_data().filter(function (item: any) {
    if (item.category.split('&&').includes('git')) {
      return item;
    }
  });
  ngOnInit(): void {
    // console.log(this.data);
  }
}
