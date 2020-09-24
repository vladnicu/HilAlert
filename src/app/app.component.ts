import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hil-alert';

  constructor(updates: SwUpdate, private swPush: SwPush) {

    updates.available.subscribe((event) => {
      // this.update = true;

      updates.activateUpdate().then(() => document.location.reload()); // reloads the page is there is an update
    });
  }

  ngOnInit() {

  }
}
