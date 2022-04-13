import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private location: Location, private dataService: DataService) { }
  search: string = '';
  showHeader = true;

  onChangeEvent(event: any) {
    console.log(event.target.value);
    this.router.navigateByUrl('/search?q=' + this.search);
  }
  onKeypressEvent(event: any) {
    console.log(event);
    let path = '';
    let queryParams;
    let allquery: any = {
      q: event,
    };
    this.router.navigate(['/search'], {
      queryParams: allquery,
      replaceUrl: true,
    });
  }
  if_login_change_showHeader_to_hide_header() {
    // console.log(this.location.path());
    // console.log(this.location.subscribe);
    if ('/login' == this.location.path()) {
      this.showHeader = false;
    }
  }

  ngOnInit(): void {
    this.if_login_change_showHeader_to_hide_header();
  }
}
