import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from 'src/app/Enrollment/enrollment.service';
import { Course } from 'src/app/Models/Course';
import { Enrollment } from 'src/app/Models/Enrollment';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-admin-enroll-list',
  templateUrl: './admin-enroll-list.component.html',
  styleUrls: ['./admin-enroll-list.component.css']
})
export class AdminEnrollListComponent implements OnInit{

  DropdownCourses:Course[]=[];
  AEnrList:Enrollment[];
  userLoggedIn:boolean=false;
  currUser:User={ userId: 0, userMail: "", userName: "", userPassword: "", userRole: false };

  noEnrs:boolean=false;


  constructor(private EnrServiceObj:EnrollmentService,private router:Router,private UserServiceObj:UserService){
    this.userLoggedIn = this.UserServiceObj.isLoggedIn();
  }

  ngOnInit(): void {
    {debugger}
    this.noEnrs = false;
    this.GetAllEnrollments();
    this.EnrServiceObj.getCoursesDropdown().subscribe(data => {
      this.DropdownCourses = data;
    });
    console.log(this.AEnrList);
    this.currUser=this.UserServiceObj.currentUser;

  }

  GetAllEnrollments():void{
    this.EnrServiceObj.getAll().subscribe(data => {
      this.AEnrList = data;
      if(this.AEnrList.length == 0){
        this.noEnrs = true;
      }
    })
  }

  ALogout(){
    this.UserServiceObj.logout();
    this.router.navigateByUrl('ALogin');
  }

  printTable():void{
    var tab = document.getElementById('tab');

            var style = "<style>";
            style = style + "table {width: 100%;font: 17px Calibri;}";
            style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
            style = style + "padding: 2px 3px;text-align: center;}";
            style = style + "</style>";

            var win = window.open('', '', 'height=700,width=700');
            win.document.write(style);          //  add the style.
            win.document.write(tab.outerHTML);
            win.document.close();
            win.print();
  }
}
