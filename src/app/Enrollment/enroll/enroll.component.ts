import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/Models/Course';
import { Enrollment } from 'src/app/Models/Enrollment';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/User/user.service';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit{

  DropdownCourses:Course[]=[];
  c:Course={courseId:0,courseTitle:"",courseCredits:0};
  userLoggedIn:boolean=false;
  EnrollForm:FormGroup;
  currUser:User={ userId: 0, userMail: "", userName: "", userPassword: "", userRole: false };
  StudentEnrs:Enrollment[];
  AldEnrMsg:String="";

  constructor(private EnrServiceObj:EnrollmentService,private router:Router,private UserServiceObj:UserService){
    this.userLoggedIn = this.UserServiceObj.isLoggedIn();
  }

  ngOnInit():void{

    this.EnrollForm=new FormGroup({
      chosenCourse : new FormControl(this.c.courseId,[Validators.required]) 
    })

    this.EnrServiceObj.getCoursesDropdown().subscribe(data => {
      this.DropdownCourses = data;
    });

    this.currUser=this.UserServiceObj.currentUser;
    
  }

  // get EnrollFormControl() {
  //   return this.EnrollFormControl.controls;
  // }

  // isChosen():boolean{
  //   if(this.EnrollFormControl.controls['chosenCourse'] == "0"){
  //     return false;
  //   }
  //   return true;
  // }

  onSubmit(form:FormGroup):void{
    //{{debugger}}
    this.AldEnrMsg="";
    this.c.courseId = form.value.chosenCourse;
    if(this.c.courseId == 0){
      alert("Please choose a course.");
      return;
    }
    this.EnrServiceObj.getEnrollmentsOfStudent(this.UserServiceObj.currentUser.userId).subscribe(data => {
      this.StudentEnrs = data;
      console.log(this.StudentEnrs);
      if(this.checkAlreadyEnrolled(this.StudentEnrs,form.value.chosenCourse ) ){
        // alert("already enrolled");
        this.AldEnrMsg = "Already Enrolled"
      }
      else{
        this.addEnrollment(this.UserServiceObj.currentUser.userId,form.value.chosenCourse);
        
      }
    });  
    console.log(this.c.courseId);
  }

  checkAlreadyEnrolled(enrs:Enrollment[],cid:number):boolean{
    for(var e of enrs){
      if(e.courseId == cid){
        return true;
      }
    }
    return false;
  }

  addEnrollment(sid:number,cid:number):void{
    
      {{debugger}}
      this.EnrServiceObj.enroll(sid,cid).subscribe(data => {
        console.log(data);
        alert("Enrollment to Course ID: " + cid + " successful!");
        this.router.navigateByUrl('StudentEnrollList');
      })
    
    
    
  }


  SLogout(){
    this.UserServiceObj.logout();
    this.router.navigateByUrl('SLogin');
  }

  AlertFunction():void{
    if (confirm("Clicking on this will log you out!") == true) {
      this.SLogout();
    } else {
        
    }
  }

  ViewStudentEnrollList(){
    this.router.navigateByUrl('StudentEnrollList');
  }


  
}
