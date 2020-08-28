import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/shared/services/user.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/services/user.service'
import {MatFormFieldModule} from '@angular/material/form-field'; 
@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.scss']
})
export class LogindialogComponent implements OnInit {
  

  user:  User = {
    username: null,
  };

  
  constructor(
    public dialogRef: MatDialogRef<LogindialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private http : HttpClient, private userService : UserService) {}


  ngOnInit(): void {
    
  }
  onSubmit() {
    

   
    
    

    this.userService.login(this.user).subscribe(
      
      data => console.log(data),
      error => console.log(error),

    );
 
  }

}
