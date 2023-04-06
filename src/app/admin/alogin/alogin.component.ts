import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit{
  userRes: User = { userId: 0, userMail: "", userName: "", userPassword: "", userRole: false };

  ALoginForm: FormGroup;  //=new FormGroup({});
  ErrMsg: String = "";
  checkAdmin: User;


  constructor(private router: Router, private userServiceObj: UserService) {
  }

  ngOnInit(): void {
    this.ALoginForm = new FormGroup({
      amail: new FormControl(this.userRes.userMail, [Validators.required, Validators.email]),
      apass: new FormControl(this.userRes.userPassword, [Validators.required, Validators.minLength(6), Validators.maxLength(8)])
    });
  }

  get ALoginFormControl() {
    return this.ALoginForm.controls;
  }

  onSubmit(form: FormGroup): void {
    this.userRes.userMail = form.value.amail;
    this.userRes.userPassword = form.value.apass;
    this.ValidateAdmin(this.userRes);
    if(this.userServiceObj.isLoggedIn() == false)
      this.ErrMsg = "Invalid E-mail or password";
  }

  ValidateAdmin(usr: User): void {
    this.userServiceObj.ValidateAdmin(usr).subscribe( data =>{
          this.userServiceObj.currentUser = data;
          this.ErrMsg = '';
          this.userServiceObj.login();
          this.router.navigateByUrl('AHome');
    });
  
  }
}
