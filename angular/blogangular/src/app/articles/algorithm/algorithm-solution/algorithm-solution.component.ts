import { Component, OnInit } from '@angular/core';

import { UrlService } from 'src/app/service/articles/url.service';
@Component({
  selector: 'app-algorithm-solution',
  templateUrl: './algorithm-solution.component.html',
  styleUrls: ['./algorithm-solution.component.css'],
})
export class AlgorithmSolutionComponent implements OnInit {
  constructor(private urlService: UrlService) {}
  url = this.urlService.get_url();
  ngOnInit(): void {
    // console.log(this.urlService.get_url());
  }
}
