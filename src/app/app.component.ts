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
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();

      console.log('install constructor app');
      
    });

    updates.available.subscribe((event) => {
      // this.update = true;

      updates.activateUpdate().then(() => document.location.reload()); // reloads the page is there is an update
    });
  }

  ngOnInit() {
    
    this.pushSubscription();

    this.swPush.messages.subscribe((message) => console.log(message));

    this.swPush.notificationClicks.subscribe(({ action, notification }) => {
      window.open(notification.data.url);
    });
  }

  pushSubscription() {
    if (!this.swPush.isEnabled) {
      console.log('Notification is not enabled');
      return;
    }
    this.swPush
      .requestSubscription({
        serverPublicKey:
          'BO2x-nfiBpN7H8taJcGe03EvXVW_NJ7AgpyZQ7bXXmb0Z0JskQ7jmo6HkGspiXlCdy5hQyXjyLbLooflNIUlDhQ',
      })
      .then((sub) => {
        // Make a post call to serve
        console.log(JSON.stringify(sub));
      })
      .catch((err) => console.log(err));
  }
}
