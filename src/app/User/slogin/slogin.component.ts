import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-slogin',
  templateUrl: './slogin.component.html',
  styleUrls: ['./slogin.component.css']
})
export class SloginComponent implements OnInit {
  userRes: User = { userId: 0, userMail: "", userName: "", userPassword: "", userRole: false };

  SLoginForm: FormGroup;  //=new FormGroup({});
  ErrMsg: String = "";
  checkStudent: User;


  constructor(private router: Router, private userServiceObj: UserService) {
  }

  ngOnInit(): void {
    this.SLoginForm = new FormGroup({
      smail: new FormControl(this.userRes.userMail, [Validators.required, Validators.email]),
      spass: new FormControl(this.userRes.userPassword, [Validators.required, Validators.minLength(6), Validators.maxLength(8)])
    });
  }

  get SLoginFormControl() {
    return this.SLoginForm.controls;
  }

  onSubmit(form: FormGroup): void {
    this.userRes.userMail = form.value.smail;
    this.userRes.userPassword = form.value.spass;
    this.ValidateStudent(this.userRes);
    if(this.userServiceObj.isLoggedIn() == false)
      this.ErrMsg = "Invalid E-mail or password";
  }

  ValidateStudent(usr: User): void {
    this.userServiceObj.ValidateStudent(usr).subscribe( data =>{
      
          this.userServiceObj.currentUser = data;
          this.ErrMsg = '';
          this.userServiceObj.login();
          this.router.navigateByUrl('Enroll');

    });
  
  }
}
