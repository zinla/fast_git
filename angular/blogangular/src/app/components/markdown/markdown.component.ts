import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-markdown-preview',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css'],
})
export class MarkdownComponent implements OnInit {
  @Input() md_file: any;
  markdown: string | undefined;
  constructor(private mdService: MarkdownService, private http: HttpClient) {}

  async ngOnInit() {
    const markdownRaw = await this.http
      .get(this.md_file, {
        responseType: 'text',
      })
      .toPromise();
    // console.log(markdownRaw);

    this.markdown = this.mdService.compile(markdownRaw as string);
  }
}
