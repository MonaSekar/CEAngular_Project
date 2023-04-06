import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/Models/Course';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/User/user.service';
import { CourseService } from '../../Course/course.service';

@Component({
  selector: 'app-admin-courses-list',
  templateUrl: './admin-courses-list.component.html',
  styleUrls: ['./admin-courses-list.component.css']
})
export class AdminCoursesListComponent implements OnInit {
  ExistingCourses:Course[]=[];
  userLoggedIn:boolean=false;
  currUser:User={ userId: 0, userMail: "", userName: "", userPassword: "", userRole: false };



  constructor(private CourseServiceObj : CourseService,private UserServiceObj:UserService,private router:Router){
    this.userLoggedIn = this.UserServiceObj.isLoggedIn();

  }

  ngOnInit(): void {
    this.GetAllCourses();
    this.currUser=this.UserServiceObj.currentUser;

  }

  GetAllCourses():void{
    this.CourseServiceObj.GetAll().subscribe(data => {
      this.ExistingCourses = data;
    })
  }

  modifyCourse(cid:number):void{
   // this.router.navigate(['AdminModifyCourse/'+cid]);
   this.router.navigate(['AdminEditCourse/'+cid]);
  }

  ALogout(){
    this.UserServiceObj.logout();
    this.router.navigateByUrl('ALogin');
  }

  



}
