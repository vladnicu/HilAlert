import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  update = false;

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      // this.update = true;

      updates.activateUpdate().then(() => document.location.reload()); // reloads the page is there is an update
    });
  }
}
