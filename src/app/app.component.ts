import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './User/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CEsystem';
  isLoggedIn:boolean=false;
  constructor(private router:Router,private UserServiceObj:UserService){
    this.isLoggedIn = this.UserServiceObj.isLoggedIn();
  }
  ngOnInit(): void {
    this.router.navigateByUrl('CEHome')
  }
}
