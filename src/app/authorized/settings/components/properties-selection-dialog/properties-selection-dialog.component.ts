import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Hil } from 'src/app/shared/services/hil.service';

export interface Property{
  name: string;
}
const ELEMENT_DATA: Property [] = [
{name: 'date'},
{name: 'machinename'},
{name: 'osversion'},
{name: 'projectname'},
{name: 'selectedServers'},
{name: 'labcarType'},
{name: 'autorun'}
];

@Component({
  selector: 'app-properties-selection-dialog',
  templateUrl: './properties-selection-dialog.component.html',
  styleUrls: ['./properties-selection-dialog.component.scss']
})

export class PropertiesSelectionDialogComponent implements OnInit {
  displayedColumns: string[] = ['select', 'propertyname'];
  dataSource = new MatTableDataSource<Property>(ELEMENT_DATA);

  public initialSelection: Property[] = [];
  selection = new SelectionModel<Property>(true, []);
  constructor() { }

  ngOnInit(): void {
  }

   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Property): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }

}
