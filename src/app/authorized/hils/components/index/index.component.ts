import {
  Component,
  OnInit,
  ɵCompiler_compileModuleSync__POST_R3__,
} from '@angular/core';
import { HilService, Hil } from 'src/app/shared/services/hil.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { LogindialogComponent } from '../logindialog/logindialog.component';
import { HttpClient } from '@angular/common/http';
import { User, UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public hils: Hil[] = [];
  loading = true;

  constructor(
    private hilService: HilService,
    public dialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('username') === null) {
      this.openUserDialog();
    }

    this.hilService.getHils().subscribe(
      (data) => {
        const savedHils: string[] = JSON.parse(localStorage.getItem('hils'));
        if (savedHils) {
          this.hils = data.filter((x) => savedHils.includes(x.labcarname));
         
        } else {
          this.hils = data;
          
        }
        this.loading = false;
      },
      (err) => console.log(err)
    );
  }

  openUserDialog(): void {
    const dialogRef = this.dialog.open(LogindialogComponent, {});

    dialogRef.afterClosed().subscribe((username: string) => {
      this.userService.login(username).subscribe(
        (data) => localStorage.setItem('username', data.username),
        (error) => console.log(error)
      );
    });
  }

  cardClasses(hil: Hil): boolean {
    const hilDateStr = hil.firsthilentry.date;
    const hilDate = new Date(hilDateStr);
    const diff = Date.now() - hilDate.getTime();
    const minutes = Math.floor(diff / 1000 / 60);

    return minutes > 30;
  }
}
