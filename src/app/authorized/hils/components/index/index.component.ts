import { Component, OnInit } from '@angular/core';
import { HilService, Hil } from 'src/app/shared/services/hil.service'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public hils: Hil[] = [];
  
  

  constructor(private hilService: HilService) {
    
  }

  ngOnInit(): void {
    this.hilService.getHil().subscribe(
      (data) => {
        this.hils = data;
        
        
        
      },
      (err) => console.log(err)
    );
    
}
}
