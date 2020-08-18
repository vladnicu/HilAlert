import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./authorized/authorized.module').then(m => m.AuthorizedModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
