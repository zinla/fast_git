import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngbd-buttons-checkbox',
  templateUrl: './ngbd-buttons-checkbox.component.html',
  styleUrls: ['./ngbd-buttons-checkbox.component.scss'],
})
export class NgbdButtonsCheckboxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  model = {
    left: true,
    middle: false,
    right: false,
  };
}
