import { Component, OnInit } from '@angular/core';

import { CodewarService } from '../../../service/codewar.service';

@Component({
  selector: 'app-code-war',
  templateUrl: './code-war.component.html',
  styleUrls: ['./code-war.component.css'],
})
export class CodeWarComponent implements OnInit {
  constructor(private codewarService: CodewarService) {}

  ngOnInit(): void {
    // console.log(this.codewarService.get_data({ user: 'Alen_Andry' }));
  }
}
