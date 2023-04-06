import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser:User={userId:0,userMail:"",userName:"",userPassword:"",userRole:false};

  ValStudent: string = "https://localhost:7064/api/Users/";
  ResetCred:string="https://localhost:7064/api/Enrollments/studentReset/";

  LoggedIn:boolean=false;

  constructor(private http: HttpClient) { }

  ValidateStudent(u:User): Observable<User> {
    return this.http.get<User>(this.ValStudent + u.userMail + "/" + u.userPassword + "/0");
  }

  ValidateAdmin(u:User): Observable<User> {
    return this.http.get<User>(this.ValStudent + u.userMail + "/" + u.userPassword + "/1");
  }

  CreditsStatusReset(sid:number):Observable<any>{
     return this.http.get<any>(this.ResetCred + sid);
  }

  login():void
  {   
      this.LoggedIn=true;
  }
  
  
  logout():void
  {
    // {{debugger}}
      if(this.currentUser.userRole == false){
        this.CreditsStatusReset(this.currentUser.userId).subscribe(data => {
          console.log(data);
        });
      }
      this.LoggedIn=false;
      this.currentUser={userId:0,userMail:"",userName:"",userPassword:"",userRole:false};
  }

  isLoggedIn():boolean
  {
    return this.LoggedIn;
  }
}
