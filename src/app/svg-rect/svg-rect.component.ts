import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-rect',
  templateUrl: './svg-rect.component.html',
  styleUrls: ['./svg-rect.component.scss'],
})
export class SvgRectComponent implements OnInit {
  left = 0;
  top = 0;
  width = 200;
  height = 100;
  fillColor = 'rgb(255, 0, 0)';

  constructor() {}

  ngOnInit(): void {}

  changeColor() {
    this.fillColor = 'rgb(0, 255, 0)';
  }
}
