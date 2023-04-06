import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  GetAllReq:string="https://localhost:7064/api/Courses";
  GetByIdReq:string="https://localhost:7064/api/Courses/";
  PutReq:string="https://localhost:7064/api/Courses/";

  GetAll():Observable<Course[]>{
    return this.http.get<Course[]>(this.GetAllReq);   
  }

  GetById(id:number):Observable<Course>{
    return this.http.get<Course>(this.GetByIdReq + id);
  }


  PutCourse(cid:number,isCredMod:boolean,c:Course):Observable<any>{
    {{debugger}}
    console.log("inside put course service");
    return this.http.put<any>(this.PutReq + cid + "/" + isCredMod,c,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

}
