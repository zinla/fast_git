import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import copy from './copy';

import { CanonicalService } from './service/canonical/canonical.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "Alen Andry's Blog";
  constructor(
    private meta: Meta,
    private titleMeta: Title,
    private canonical: CanonicalService
  ) {}

  ngOnInit() {
    copy();
    this.titleMeta.setTitle(this.title);
    this.meta.addTag({
      name: 'description',
      content: 'Blog Page',
    });
    this.meta.addTag({
      name: 'description',
      content: "Alen Andry's Blog Build by Angular",
    });
    this.meta.addTags([
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-10-04', scheme: '2021-10-04' },
      {
        name: 'keywords',
        content:
          'Rust.Javascript,Java,Cpp,C++,C,Hackshell,Vue,Angulr,React,Sold-js,App,Web Application,Rust,Iced,Gui,Python',
      },
      { name: 'author', content: 'Alen_Andry' },
      { name: 'robots', content: 'content generatend by markdown convetter ' },
    ]);

    this.canonical.createCanonicalLink();
  }
}
