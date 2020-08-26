import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMenuItemComponent } from './settings-menu-item.component';

describe('SettingsMenuItemComponent', () => {
  let component: SettingsMenuItemComponent;
  let fixture: ComponentFixture<SettingsMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
