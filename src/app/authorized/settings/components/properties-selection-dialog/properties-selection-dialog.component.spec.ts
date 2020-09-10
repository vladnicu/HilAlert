import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesSelectionDialogComponent } from './properties-selection-dialog.component';

describe('PropertiesSelectionDialogComponent', () => {
  let component: PropertiesSelectionDialogComponent;
  let fixture: ComponentFixture<PropertiesSelectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesSelectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
