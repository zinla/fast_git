import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private router: Router) {}
  query_prams = location.href.split('blog/')[0] + 'blog/';
  get_url() {
    return this.query_prams;
  }
}
