import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HilSelectionDialogComponent } from './hil-selection-dialog.component';

describe('HilSelectionDialogComponent', () => {
  let component: HilSelectionDialogComponent;
  let fixture: ComponentFixture<HilSelectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HilSelectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HilSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
