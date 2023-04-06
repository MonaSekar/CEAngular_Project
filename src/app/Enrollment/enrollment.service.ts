import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { CourseService } from '../Course/course.service';
import { Course } from '../Models/Course';
import { Enrollment } from '../Models/Enrollment';
import { UserService } from '../User/user.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  EnrsOfStudent:Enrollment[];
  newEnr:Enrollment={enrollmentId:0,
    studentId:0,
    courseId:0,
    enrollmentDate:new Date(),
    isCreditsModified:false
    //course:{courseId:0,courseTitle: "",courseCredits:0}
  }
  


  //ExistingCourses:Observable<Course[]=[];
  GetAllCoursesReq:string="https://localhost:7064/api/Courses";
  GetEnrOfStudent:string="https://localhost:7064/api/Enrollments/student/";
  PostEnrollment:string="https://localhost:7064/api/Enrollments";
  GetEnrollmentById:string="https://localhost:7064/api/Enrollments/";
  DeleteEnrollment:string="https://localhost:7064/api/Enrollments/";
  GetAllEnr:string="https://localhost:7064/api/Enrollments";


  constructor(private http:HttpClient,private CourseServiceObj:CourseService,private courseServiceObj:CourseService) {}


  getCoursesDropdown(): Observable<Course[]>{
    return this.http.get<Course[]>(this.GetAllCoursesReq);   
  }


  getEnrollmentsOfStudent(sid:number):Observable<Enrollment[]>{
    return this.http.get<Enrollment[]>(this.GetEnrOfStudent + sid);
  }


  enroll(sid:number,cid:number):any{  //Observable<Enrollment>
    this.newEnr.courseId = cid;
    this.newEnr.studentId = sid;
    console.log(sid + " " + cid);

    // this.courseServiceObj.GetById(cid).subscribe(data => {
    //   this.newEnr.course = data;
    //   console.log(data);
    //   console.log(this.newEnr);
      
    // });

    return this.http.post<Enrollment>(this.PostEnrollment,this.newEnr,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
     
  }
  

  unenrollConfirmation(eid:number):Observable<Enrollment>{
    return this.http.get<Enrollment>(this.GetEnrollmentById + eid);
  }

  unenroll(eid:number):any{
    return this.http.delete<any>(this.DeleteEnrollment + eid,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  getAll():Observable<Enrollment[]>{
    return this.http.get<Enrollment[]>(this.GetAllEnr);
  }

  
}
