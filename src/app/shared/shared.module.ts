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
const matModules = [
  MatDialogModule,
  MatCheckboxModule,
  FormsModule,
  MatTableModule,
  MatDialogModule,
  MatGridListModule,
  MatCardModule,
<<<<<<< HEAD
  MatButtonModule,
  MatProgressSpinnerModule
=======
  MatButtonModule
 
>>>>>>> ab0188f3e7072f91a183f2da6570fcdd3c7b62ad
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matModules
  ],
  exports: [
    ...matModules
  ]
})
export class SharedModule { }
