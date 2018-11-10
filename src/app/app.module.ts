import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddFiltersComponent } from './add-filters/add-filters.component';
import { FilterSetComponent } from './add-filters/filter-set/filter-set.component';
import { FilterSliderComponent } from './add-filters/filter-set/filter-slider/filter-slider.component';
import { SyncSelectionComponent } from './add-filters/filter-set/sync-selection/sync-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFiltersComponent,
    FilterSetComponent,
    FilterSliderComponent,
    SyncSelectionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
