import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'  ;
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProjectIconPipe } from './pipes/project-icon.pipe';
const matModules = [
  MatDialogModule,
  MatCheckboxModule,
  FormsModule,
  MatTableModule,
  MatDialogModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [ProjectIconPipe],
  imports: [
    CommonModule,
    ...matModules
  ],
  exports: [
    ...matModules,
    ProjectIconPipe
  ]
})
export class SharedModule { }
