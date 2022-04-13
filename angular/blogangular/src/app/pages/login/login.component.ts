import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}
  data = this.dataService.get_data().filter(function (item: any) {
    if (item.category == 'About') {
      return item;
    }
  });
  id: string = '';
  password: string = '';
  video_src =
    'https://googleteam.coding.net/p/github_repos/d/two_and_half_man/git/raw/master/好汉两个半S01E02.mp4';
  route_login() {
    // console.log(this.id);
    // console.log(this.password);
    if (this.id === 'alen' && this.password === '147258369') {
      this.router.navigateByUrl('/');
    }
  }
  ngOnInit(): void {
    // console.log(this.data);
  }
}
