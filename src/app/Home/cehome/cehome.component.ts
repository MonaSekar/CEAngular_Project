import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cehome',
  templateUrl: './cehome.component.html',
  styleUrls: ['./cehome.component.css']
})
export class CEHomeComponent {

  constructor(private router:Router){

  }

  // goToStudentLogin(){
  //   this.router.navigateByUrl('/SLogin');
  // }

}
