import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {
  PropertyService,
  Property,
} from 'src/app/shared/services/property.service';
@Component({
  selector: 'app-properties-selection-dialog',
  templateUrl: './properties-selection-dialog.component.html',
  styleUrls: ['./properties-selection-dialog.component.scss'],
})
export class PropertiesSelectionDialogComponent implements OnInit {
  displayedColumns: string[] = ['select', 'propertyname'];
  dataSource = new MatTableDataSource<Property>();
  loading = true;
  public initialSelection: Property[] = [];
  selection = new SelectionModel<Property>(true, []);
  constructor(private propertyService: PropertyService) {}
  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(
      (data) => {
        this.dataSource.data = data;
        const savedProperties: string[] = JSON.parse(
          localStorage.getItem('properties')
        );
        if (savedProperties) {
          this.initialSelection = data.filter((x) =>
            savedProperties.includes(x.name)
          );
          this.selection.select(...this.initialSelection);
        }
        this.loading = false;
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
  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Property): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} `;
  }
}
