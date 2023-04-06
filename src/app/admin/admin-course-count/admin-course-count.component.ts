import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/Course/course.service';
import { EnrollmentService } from 'src/app/Enrollment/enrollment.service';
import { Course } from 'src/app/Models/Course';
import { CourseCount } from 'src/app/Models/CourseCount';
import { Enrollment } from 'src/app/Models/Enrollment';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-admin-course-count',
  templateUrl: './admin-course-count.component.html',
  styleUrls: ['./admin-course-count.component.css']
})
export class AdminCourseCountComponent implements OnInit {
  
  AllCourses:Course[];
  allEnrs:Enrollment[];
  userLoggedIn:boolean=false;
  currUser:User={ userId: 0, userMail: "", userName: "", userPassword: "", userRole: false };
  //item:Course;
  
  enrollmentsCount:CourseCount[]=[];
  temp:CourseCount={courseTitle:"",courseCount:0};
  
  constructor(private UserServiceObj: UserService,private EnrServiceObj:EnrollmentService,private router:Router)
  {
    this.userLoggedIn = this.UserServiceObj.isLoggedIn();
  }

  ngOnInit(): void {
    this.EnrServiceObj.getCoursesDropdown().subscribe(data => {
      this.AllCourses = data;
      console.log(this.AllCourses);
    });

    this.EnrServiceObj.getAll().subscribe(data => {
      this.allEnrs = data;
      this.CalcEnrollmentsCount(this.allEnrs)
      //console.log()
    });
    this.currUser=this.UserServiceObj.currentUser;
  }

  CalcEnrollmentsCount(enrs:Enrollment[]):void{
      const countBy = (arr, prop) => arr.reduce((prev, curr) => (prev[curr[prop]] = ++prev[curr[prop]] || 1, prev), {});
      let EnrCount = countBy(enrs,'courseId');
      console.log(EnrCount);
      for (const [k, v] of Object.entries(EnrCount)) {
        let c_item = this.AllCourses.find(x => x.courseId == Number(k));
        console.log(this.enrollmentsCount)
        this.AllCourses.splice(this.AllCourses.indexOf(c_item),1);
        //this.AllCourses[this.AllCourses.indexOf(c_item)].courseTitle = "";
        this.temp.courseTitle = c_item.courseTitle;
        this.temp.courseCount = Number(v);
        console.log(this.temp);
        this.enrollmentsCount.push(this.temp);
        this.temp = {courseTitle:"",courseCount:0};
        console.log(this.enrollmentsCount)
      }
      console.log(this.enrollmentsCount)

      //for(this.item of this.AllCourses){
        for(var item of this.AllCourses){
          this.temp.courseTitle = item.courseTitle;
          this.temp.courseCount = 0;
          this.enrollmentsCount.push(this.temp);
          this.temp = {courseTitle:"",courseCount:0};
      }
        console.log(this.enrollmentsCount)
        
      // }
  }

  ALogout(){
    this.UserServiceObj.logout();
    this.router.navigateByUrl('ALogin');
  }


}
