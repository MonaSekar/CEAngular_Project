import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enrollment } from 'src/app/Models/Enrollment';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/User/user.service';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-student-enroll-list',
  templateUrl: './student-enroll-list.component.html',
  styleUrls: ['./student-enroll-list.component.css']
})
export class StudentEnrollListComponent implements OnInit{
  _enr:Enrollment={enrollmentId:0,
    studentId:0,
    courseId:0,
    enrollmentDate:new Date(),
    isCreditsModified:false,
    course:{courseId:0,courseTitle: "",courseCredits:0}
  }
  EnrsOfStudent:Enrollment[];
  totalCreds:number=0;
  noEnrs:boolean=false;

  userLoggedIn:boolean=false;
  currUser:User={ userId: 0, userMail: "", userName: "", userPassword: "", userRole: false };

  constructor(private EnrServiceObj:EnrollmentService,private UserServiceObj:UserService,private router:Router){
    this.userLoggedIn = this.UserServiceObj.isLoggedIn();
  }

  ngOnInit(): void {
    // {{debugger}}
    this.EnrServiceObj.getEnrollmentsOfStudent(this.UserServiceObj.currentUser.userId)
    .subscribe(data =>{
      this.EnrsOfStudent = data;
      console.log("no of enr" + this.EnrsOfStudent.length);
      if(this.EnrsOfStudent.length == 0){
        this.noEnrs = true;
      }
      else{
        this.totalCreds = this.totalCreditsCalc();
      }     
    });
    

    this.currUser=this.UserServiceObj.currentUser;
  }

  totalCreditsCalc():number{
    let sum: number = this.EnrsOfStudent.map(a => a.course.courseCredits).reduce(function(a, b)
    {
      return a + b;
    });
    return sum;
  }

  SLogout(){
    this.UserServiceObj.logout();
    this.router.navigateByUrl('SLogin');
  }

  unenrollConf(eid:number):void{
    this.router.navigate(['Unenroll/'+eid]);
    // this.EnrServiceObj.unenrollConfirmation(eid).subscribe(data => {
    //   this._enr = data;
    //   this.
    // });
  }
  

}
