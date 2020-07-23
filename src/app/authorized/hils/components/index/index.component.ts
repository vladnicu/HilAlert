import { Component, OnInit } from '@angular/core';
import { HilService, Hil } from 'src/app/shared/services/hil.service';
import { DatePipe, formatDate, ɵPLATFORM_WORKER_APP_ID } from '@angular/common';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public hils: Hil[] = [];

  constructor(private hilService: HilService){
    // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

  }

  ngOnInit(): void {
    this.hilService.getHil().subscribe(
      (data) => {
        const savedHils: string[] = JSON.parse(localStorage.getItem('hils'));
        this.hils = data.filter(x => savedHils.includes(x.labcarname));
      },
      (err) => console.log(err)
    );
  }

  cardClasses(hil: Hil): boolean{
    const hilDateStr = hil.date;
    const hilDate = new Date(hilDateStr);
    const diff =  Date.now() - hilDate.getTime();
    const minutes = Math.floor((diff / 1000) / 60);

    return minutes > 30;
  }
}
