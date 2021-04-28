import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data:any = [];

  constructor(private user:UsersService) { 
    this.user.getData().subscribe(data=>{
      // console.warn(data);
      this.data = data;
    })
  }

  ngOnInit(): void {
  }

}
