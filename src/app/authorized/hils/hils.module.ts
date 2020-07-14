import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HilsRoutingModule } from './hils-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    HilsRoutingModule
  ]
})
export class HilsModule { }
