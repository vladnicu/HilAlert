import { Component, OnInit } from '@angular/core';
import { HilService, Hil } from 'src/app/shared/services/hil.service';

@Component({
  selector: 'app-hil-selection-dialog',
  templateUrl: './hil-selection-dialog.component.html',
  styleUrls: ['./hil-selection-dialog.component.scss']
})
export class HilSelectionDialogComponent implements OnInit {

  public hils: Hil[] = [];

  constructor(private hilService: HilService) {}

  ngOnInit(): void {
    this.hilService.getHil().subscribe(
      (data) => {
        this.hils = data;
        console.log(data);
      },
      (err) => console.log(err)
    );
  }


}
