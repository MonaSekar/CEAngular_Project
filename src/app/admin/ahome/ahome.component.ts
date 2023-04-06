import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.css']
})
export class AHomeComponent implements OnInit{

  userLoggedIn:boolean=false;
  currUser:User={ userId: 0, userMail: "", userName: "", userPassword: "", userRole: false };


  constructor(private UserServiceObj:UserService,private router:Router){
    this.userLoggedIn = this.UserServiceObj.isLoggedIn();

  }

  ngOnInit(): void {
    this.currUser=this.UserServiceObj.currentUser;
  }

  GoToAdminCourses():void{
    this.router.navigateByUrl('AdminCoursesList');
  }

  GoToAdminEnrs():void{
    this.router.navigateByUrl('AdminEnrollList');
  }

  ALogout():void{
    this.UserServiceObj.logout();
    this.router.navigateByUrl('ALogin');
  }

  AlertFunction():void{
    if (confirm("Clicking on this will log you out!") == true) {
      this.ALogout();
    } else {
        
    }
  }
}
