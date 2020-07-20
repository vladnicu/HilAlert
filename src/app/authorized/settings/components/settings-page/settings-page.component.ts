import { Component, OnInit } from '@angular/core';
import { HilSelectionDialogComponent } from '../hil-selection-dialog/hil-selection-dialog.component';
import { MatDialog } from '@angular/material/dialog';

import { Hil } from 'src/app/shared/services/hil.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  public selectedHils : Hil []  = [];
  constructor(public dialog: MatDialog) { }
   
  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(HilSelectionDialogComponent);

    dialogRef.afterClosed().subscribe (result  => {
      
      this.selectedHils= result as Hil[];
    });
  }


}
