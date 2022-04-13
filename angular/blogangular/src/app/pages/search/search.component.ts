import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) { }
  query_prams = this.router.url.split('q=')[1];
  data = this.dataService.get_data().filter((item: any) => {
    if (
      item.title.includes(this.query_prams) ||
      item.title.includes(
        this.query_prams.replace(
          this.query_prams.split('')[0],
          this.query_prams.split('')[0].toUpperCase()
        )
      ) ||
      item.content.includes(this.query_prams) ||
      item.content.includes(
        this.query_prams.replace(
          this.query_prams.split('')[0],
          this.query_prams.split('')[0].toUpperCase()
        )
      ) ||
      item.category.includes(this.query_prams) ||
      item.category.includes(
        this.query_prams.replace(
          this.query_prams.split('')[0],
          this.query_prams.split('')[0].toUpperCase()
        )
      )
    ) {
      return item;
    }
  });
  ifzero() {
    if (this.data.length == 0) {
      // this.router.navigateByUrl('/');
      this.data = [];
    }
  }
  ngOnInit(): void {
    // console.log(this.data);
    // console.log(this.router.url.split('q=')[1]);
    this.ifzero();
  }
}
