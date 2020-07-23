import { Component, OnInit } from '@angular/core';
import { HilService, Hil } from 'src/app/shared/services/hil.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-hil-selection-dialog',
  templateUrl: './hil-selection-dialog.component.html',
  styleUrls: ['./hil-selection-dialog.component.scss']
})
export class HilSelectionDialogComponent implements OnInit {
  displayedColumns: string[] = ['select', 'machinename', 'labcarname'];
  dataSource = new MatTableDataSource<Hil>();

  public initialSelection: Hil[] = [];
  selection: SelectionModel<Hil>;

  constructor(private hilService: HilService) {
  }

  ngOnInit(): void
  {
    this.hilService.getHil().subscribe(
      (data) => {
        this.dataSource.data = data;
        const savedHils: string[] = JSON.parse(localStorage.getItem('hils'));
        this.initialSelection = data.filter(x => savedHils.includes(x.labcarname));
        this.selection = new SelectionModel<Hil>(true, this.initialSelection );
      },
      (err) => console.log(err)
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Hil): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }

}


