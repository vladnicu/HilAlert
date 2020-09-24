import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HilsRoutingModule } from './hils-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LogindialogComponent } from './components/logindialog/logindialog.component';


@NgModule({
  declarations: [IndexComponent, LogindialogComponent],
  imports: [
    CommonModule,
    HilsRoutingModule,
    SharedModule
  ]
})
export class HilsModule { }
