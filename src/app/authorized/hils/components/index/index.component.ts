import { Component, OnInit } from '@angular/core';
import { HilService, Hil } from 'src/app/shared/services/hil.service'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public hils : Hil [] = [];
  
  constructor(private _hilService : HilService) { }

  ngOnInit(): void {
    this._hilService.getHil()
       .subscribe(data => 
            {
              this.hils = data;
              console.log(data);
            },
              err => console.log(err)
         );
       
  }
 
  
}
