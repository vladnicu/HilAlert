import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

import { AuthorizedRoutingModule } from './authorized-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthorizedRoutingModule,
    LayoutModule
  ]
})
export class AuthorizedModule { }
