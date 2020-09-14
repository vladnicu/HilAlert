import { Component, OnInit } from '@angular/core';
import { HilSelectionDialogComponent } from '../hil-selection-dialog/hil-selection-dialog.component';
import { MatDialog } from '@angular/material/dialog';

import { Hil } from 'src/app/shared/services/hil.service';
import { User, UserService } from 'src/app/shared/services/user.service';
import { PropertiesSelectionDialogComponent } from '../properties-selection-dialog/properties-selection-dialog.component';
import { PropertyService } from 'src/app/shared/services/property.service';


@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  constructor(public dialog: MatDialog, private userService: UserService, private propertyService: PropertyService) { }
  username = localStorage.getItem('username');
  numberArrayProperties: Array<number> = [];
  numberArrayHils: Array<number> = [];
  ngOnInit(): void { }

  openHilsSelectionDialog(): void {
    const dialogRef = this.dialog.open(HilSelectionDialogComponent, {
      width: '90%'
    });

    dialogRef.afterClosed().subscribe((result: Hil[]) => {
      if (result) {
        for (let entry of result) {

          this.numberArrayHils.push(entry.id);
        }
        
        console.log(this.numberArrayHils);
        this.userService.sendHils(this.username, this.numberArrayHils).subscribe(
          (data) => console.log(data),
          (error) => console.log(error)
        );
      }
    });
  }
  openPropertiesSelectionDialog(): void {
    const dialogRef = this.dialog.open(PropertiesSelectionDialogComponent, {
      width: '30%',
      height: '80%'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        for (let entry of result) {

          this.numberArrayProperties.push(entry.id);
        }

        this.propertyService.sendProperties(this.username, this.numberArrayProperties).subscribe(
          (data) => console.log(data),
          (error) => console.log(error)
        );
      }
    });
  }
}
