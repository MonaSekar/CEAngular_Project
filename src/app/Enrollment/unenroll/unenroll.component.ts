import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enrollment } from 'src/app/Models/Enrollment';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/User/user.service';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-unenroll',
  templateUrl: './unenroll.component.html',
  styleUrls: ['./unenroll.component.css']
})
export class UnenrollComponent implements OnInit{

  uEnr:Enrollment={enrollmentId:0,
    studentId:0,
    courseId:0,
    enrollmentDate:new Date(),
    isCreditsModified:false,
    course:{courseId:0,courseTitle: "",courseCredits:0}
  }

  enrId:number;

  userLoggedIn:boolean=false;
  currUser:User={ userId: 0, userMail: "", userName: "", userPassword: "", userRole: false };


  constructor(private route:ActivatedRoute,private enrServiceObj:EnrollmentService,private UserServiceObj:UserService,private router:Router){
    this.enrId=Number(this.route.snapshot.paramMap.get('id')); 
    this.userLoggedIn = this.UserServiceObj.isLoggedIn();
  }

  ngOnInit(): void {
    this.enrServiceObj.unenrollConfirmation(this.enrId).subscribe(data => {
      this.uEnr = data;
    });

    this.currUser=this.UserServiceObj.currentUser;
  }

  SLogout(){
    this.UserServiceObj.logout();
    this.router.navigateByUrl('SLogin');
  }

  unenroll(eid:number):void{
    this.enrServiceObj.unenroll(eid).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('StudentEnrollList');
    })
  }

}
