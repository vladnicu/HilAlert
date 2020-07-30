import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HilsRoutingModule } from './hils-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PromptComponent } from './components/prompt-component/prompt-component.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    HilsRoutingModule,
    SharedModule
  ]
})
export class HilsModule { }
