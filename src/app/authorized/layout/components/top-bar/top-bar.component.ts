import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  username: string;

  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
    // this.username = this.userService.getAuthValue.username;

    this.userService.authSubject.subscribe(user => {
      if (user) {
        this.username = user.username;
      }
    });
  }

  logout(): void {
    this.userService.logout();
  }

}
