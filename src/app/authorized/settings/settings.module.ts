import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { SharedModule } from './../../shared/shared.module';
import { HilSelectionDialogComponent } from './components/hil-selection-dialog/hil-selection-dialog.component';
import { SettingsMenuItemComponent } from './components/settings-menu-item/settings-menu-item.component';

@NgModule({
  declarations: [SettingsPageComponent, HilSelectionDialogComponent, SettingsMenuItemComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
