import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'filter-set',
  templateUrl: './filter-set.component.html',
  styleUrls: ['./filter-set.component.css']
})
export class FilterSetComponent implements OnInit {

  @Input() formset: FormGroup;

  constructor() { }

  sliderGroup() {
    return Object.values(this.formset.controls) as Array<FormGroup>;
  }

  ngOnInit() {
  }

}
