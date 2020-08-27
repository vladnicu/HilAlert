import { Component, OnInit } from '@angular/core';
import { HilService, Hil } from 'src/app/shared/services/hil.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public hils: Hil[] = [];
  loading = true;

  constructor(private hilService: HilService) {
  }

  ngOnInit(): void {
    this.hilService.getHils().subscribe(
      (data) => {
        const savedHils: string[] = JSON.parse(localStorage.getItem('hils'));
        if (savedHils) {
          this.loading = false;
          this.hils = data.filter((x) => savedHils.includes(x.labcarname));
          console.log(data);
        } else {
          this.loading = false;
          this.hils = data;
          console.log(data);
        }
      },
      (err) => console.log(err)
    );
  }

  cardClasses(hil: Hil): boolean {
    const hilDateStr = hil.firsthilentry.date;
    const hilDate = new Date(hilDateStr);
    const diff = Date.now() - hilDate.getTime();
    const minutes = Math.floor(diff / 1000 / 60);

    return minutes > 30;
  }
}
