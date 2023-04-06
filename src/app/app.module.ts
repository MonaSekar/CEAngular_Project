import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AdminCoursesListComponent } from './admin/admin-courses-list/admin-courses-list.component';
import { AdminModifyCourseComponent } from './admin/admin-modify-course/admin-modify-course.component';
import { CEHomeComponent } from './Home/cehome/cehome.component';
import { SloginComponent } from './User/slogin/slogin.component';
import { StudentEnrollListComponent } from './Enrollment/student-enroll-list/student-enroll-list.component';
import { EnrollComponent } from './Enrollment/enroll/enroll.component';
import { UnenrollComponent } from './Enrollment/unenroll/unenroll.component';
import { AdminModule } from './admin/admin.module';
import { AloginComponent } from './admin/alogin/alogin.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminCoursesListComponent,
    AdminModifyCourseComponent,
    CEHomeComponent,
    SloginComponent,
    StudentEnrollListComponent,
    EnrollComponent,
    UnenrollComponent,
    AloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
