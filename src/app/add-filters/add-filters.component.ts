import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'add-filters',
  templateUrl: './add-filters.component.html',
  styleUrls: ['./add-filters.component.css']
})
export class AddFiltersComponent implements OnInit {

  speciality = this.fb.group(
    {
      cardio : this.fb.group({
        current: [2],
        saved: [2],
        desc: 'PI Cardio',
        max: 100
      })
      ,
      gastro : this.fb.group({
        current: [2],
        saved: [2],
        desc: 'PI Gastro',
        max: 100
      })
      ,
      ortho : this.fb.group({
        current: [2],
        saved: [2],
        desc: 'PI Ortho',
        max: 100
      })
    });

  pcp = this.fb.group(
    {
      pcp : this.fb.group({
        current: [2],
        saved: [2],
        desc: 'PI pcp',
        max: 100
      })
    });

  amt = this.fb.group(
  {
    threshold : this.fb.group({
      current: [2],
      saved: [2],
      desc: 'Amt',
      max: 2
    })
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
