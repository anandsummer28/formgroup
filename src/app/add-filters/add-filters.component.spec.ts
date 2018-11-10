import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFiltersComponent } from './add-filters.component';

describe('AddFiltersComponent', () => {
  let component: AddFiltersComponent;
  let fixture: ComponentFixture<AddFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
