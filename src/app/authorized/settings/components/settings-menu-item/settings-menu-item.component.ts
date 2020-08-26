import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-settings-menu-item',
  templateUrl: './settings-menu-item.component.html',
  styleUrls: ['./settings-menu-item.component.scss']
})
export class SettingsMenuItemComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
