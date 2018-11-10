import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncSelectionComponent } from './sync-selection.component';

describe('SyncSelectionComponent', () => {
  let component: SyncSelectionComponent;
  let fixture: ComponentFixture<SyncSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
