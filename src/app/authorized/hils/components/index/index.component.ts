import { Component, OnInit } from '@angular/core';
import { HilService, Hil } from 'src/app/shared/services/hil.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public hils: Hil[] = [];
  loading = true;
  constructor(private hilService: HilService) {
    // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.hilService.getHil().subscribe(
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

  cardClasses(hil: Hil): boolean {
    const hilDateStr = hil.date;
    const hilDate = new Date(hilDateStr);
    const diff = Date.now() - hilDate.getTime();
    const minutes = Math.floor(diff / 1000 / 60);

    return minutes > 30;
  }
}
