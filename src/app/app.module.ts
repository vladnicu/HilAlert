import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PwaService } from 'src/app/shared/services/pwa.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { FormsModule } from '@angular/forms';

const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  
  providers: [
    {provide: MatBottomSheet, useValue: {} },
    {provide: APP_INITIALIZER, useFactory: initializer, deps: [PwaService], multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
