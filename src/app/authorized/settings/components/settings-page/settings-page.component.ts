import { Component, OnInit } from '@angular/core';
import { HilSelectionDialogComponent } from '../hil-selection-dialog/hil-selection-dialog.component';
import { MatDialog } from '@angular/material/dialog';

import { Hil } from 'src/app/shared/services/hil.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(HilSelectionDialogComponent,{
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((result: Hil[]) => {
      if (result) {
        localStorage.setItem('hils', JSON.stringify(result.map(x => x.labcarname)));
      }
    });
  }
}
