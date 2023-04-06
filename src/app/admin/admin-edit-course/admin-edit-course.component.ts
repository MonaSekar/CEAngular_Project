import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/Course/course.service';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-admin-edit-course',
  templateUrl: './admin-edit-course.component.html',
  styleUrls: ['./admin-edit-course.component.css']
})
export class AdminEditCourseComponent implements OnInit{

  CourseEditForm_ : FormGroup;
  courseResult: any={};

  userLoggedIn: boolean = false;
  currUser: User = { userId: 0, userMail: "", userName: "", userPassword: "", userRole: false };

  cid:number=0;

  constructor(public fb:FormBuilder,private CourseServiceObj: CourseService, private UserServiceObj: UserService, private router: Router, private route: ActivatedRoute){
    this.userLoggedIn = this.UserServiceObj.isLoggedIn();
    this.cid = Number(this.route.snapshot.paramMap.get('cid'));

    // this.CourseServiceObj.GetById(this.cid).subscribe(data => {
    //   this.courseResult = data;
      
      
    // });
    // console.log(this.courseResult);
    // this.CourseEditForm_=this.fb.group({
    //   cTitle:[this.courseResult.courseTitle],
    //   cCredits:[this.courseResult.courseCredits]
    // });
  }

  ngOnInit(): void {
    this.CourseEditForm_ = this.fb.group({
      cTitle:[''],
      cCredits:['']
    });

    this.CourseServiceObj.GetById(this.cid).subscribe(data => {
        this.courseResult = data;
        
        this.CourseEditForm_.setValue({cTitle: data.courseTitle,cCredits:data.courseCredits});
        this.CourseEditForm_.patchValue({cTitle: data.courseTitle,cCredits:data.courseCredits});
      });
  }


  get CourseEditFormControl() {
    return this.CourseEditForm_.controls;
  }


  Submit(form: FormGroup): void {
    console.log(form.value.courseTitle);
    console.log(form.value.courseCredits);
  }

  ALogout(): void {
    this.UserServiceObj.logout();
    this.router.navigateByUrl('ALogin');
  }
}
  