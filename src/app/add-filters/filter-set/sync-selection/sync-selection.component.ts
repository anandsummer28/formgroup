import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sync-selection',
  templateUrl: './sync-selection.component.html',
  styleUrls: ['./sync-selection.component.css']
})
export class SyncSelectionComponent implements OnInit {

  @Input() formset: FormGroup;
  syncValue: number = 4;
  constructor() { }

  ngOnInit() {
  }

  getSliders(){
    return Object.values(this.formset.controls) as Array<FormGroup>
  }

  inputAction(value) {
    for(let eachSlider of this.getSliders()) {
      eachSlider.patchValue({
        current : value
      });
    }
  }

}
