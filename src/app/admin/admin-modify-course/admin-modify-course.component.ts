import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Models/Course';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/User/user.service';
import { CourseService } from '../../Course/course.service';

@Component({
  selector: 'app-admin-modify-course',
  templateUrl: './admin-modify-course.component.html',
  styleUrls: ['./admin-modify-course.component.css']
})
export class AdminModifyCourseComponent implements OnInit {

  userLoggedIn: boolean = false;
  currUser: User = { userId: 0, userMail: "", userName: "", userPassword: "", userRole: false };

  cid: number;
  creditsBeforeModify: number;
  isCreditsMod: boolean = false;

  courseResult: Course = { courseId: 0, courseTitle: "", courseCredits: 0 };
  CourseEditForm: FormGroup;



  constructor(private CourseServiceObj: CourseService, private UserServiceObj: UserService, private router: Router, private route: ActivatedRoute) {

    this.userLoggedIn = this.UserServiceObj.isLoggedIn();
    




  }

  ngOnInit(): void {
    {{debugger}}
    this.cid = Number(this.route.snapshot.paramMap.get('cid'));
    console.log("from path:" + this.cid);
    this.CourseServiceObj.GetById(this.cid).subscribe(data => {
      this.courseResult = data;
      this.creditsBeforeModify = data.courseCredits;
      console.log(this.courseResult);
      this.currUser = this.UserServiceObj.currentUser;
      console.log(this.courseResult.courseCredits);
      var x = this.courseResult.courseTitle;
      var y = this.courseResult.courseCredits;
      //this.courseResult.courseTitle
      this.CourseEditForm = new FormGroup({
        courseTitle: new FormControl(x, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
        courseCredits: new FormControl(y, [Validators.required, Validators.min(1), Validators.max(6)])
      });
    });
  }


  get CourseEditFormControl() {
    return this.CourseEditForm.controls;
  }

  // GetCourseById(id:number):void{
  //   this.CourseServiceObj.GetById(id).subscribe(data => {
  //     {{debugger}}
  //     this.cById = data;
  //     console.log(this.cById);
  //   });
  // }

  Submit(form: FormGroup): void {
    // console.log("inside onsubmit");
    // {{debugger}}
    this.isCreditsMod = false;
    this.courseResult.courseId = this.cid;
    this.courseResult.courseTitle = form.value.courseTitle;
    this.courseResult.courseCredits = form.value.courseCredits;
    if (this.creditsBeforeModify != this.courseResult.courseCredits) {
      this.isCreditsMod = true;
    }
    this.CourseServiceObj.PutCourse(this.cid, this.isCreditsMod, this.courseResult)
      .subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('AdminCoursesList');
      });
  }

  ALogout(): void {
    this.UserServiceObj.logout();
    this.router.navigateByUrl('ALogin');
  }


}
