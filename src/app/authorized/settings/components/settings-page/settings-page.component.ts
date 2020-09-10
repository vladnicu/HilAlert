import { Component, OnInit } from '@angular/core';
import { HilSelectionDialogComponent } from '../hil-selection-dialog/hil-selection-dialog.component';
import { MatDialog } from '@angular/material/dialog';

import { Hil } from 'src/app/shared/services/hil.service';
import { User, UserService } from 'src/app/shared/services/user.service';
import { PropertiesSelectionDialogComponent } from '../properties-selection-dialog/properties-selection-dialog.component';


@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  constructor(public dialog: MatDialog, private userService : UserService) {}
  username = localStorage.getItem('username');
  ngOnInit(): void {}

  openHilsSelectionDialog(): void {
    const dialogRef = this.dialog.open(HilSelectionDialogComponent, {
      width: '90%'
    });

    dialogRef.afterClosed().subscribe((result: Hil[]) => {
      if (result) {
        this.userService.sendHils(this.username);
      }
    });
  }
  openPropertiesSelectionDialog(): void {
    const dialogRef = this.dialog.open(PropertiesSelectionDialogComponent, {
      width: '30%',
      height: '30%'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        localStorage.setItem('properties', JSON.stringify(result.map(x => x.name)));
      }
    });
  }
}
