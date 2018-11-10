import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'filter-slider',
  templateUrl: './filter-slider.component.html',
  styleUrls: ['./filter-slider.component.css']
})
export class FilterSliderComponent implements OnInit {

  @Input() slider: FormGroup;
  range: number;
  desc: string;
  saved: number;
  current: number;

  constructor() { }

  getControlers(path: string) {
    return this.slider.get(path).value;
}

  ngOnInit() {
    this.desc = this.getControlers('desc');
    this.range = Number(this.getControlers('max'));
  }

}
