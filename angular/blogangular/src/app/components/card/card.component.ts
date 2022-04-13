import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input() parent_data: any = {};
  @Input() data_aes: any;
  data: any = {};

  ngOnInit(): void {
    this.data = this.parent_data;
  }
}
