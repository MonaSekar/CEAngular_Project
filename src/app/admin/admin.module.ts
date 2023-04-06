import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AHomeComponent } from './ahome/ahome.component';
import { AdminAddCourseComponent } from './admin-add-course/admin-add-course.component';
import { AdminEnrollListComponent } from './admin-enroll-list/admin-enroll-list.component';
import { RouterModule } from '@angular/router';
import { AdminCourseCountComponent } from './admin-course-count/admin-course-count.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminEditCourseComponent } from './admin-edit-course/admin-edit-course.component';



@NgModule({
  declarations: [
    AHomeComponent,
    AdminAddCourseComponent,
    AdminEnrollListComponent,
    AdminCourseCountComponent,
    AdminEditCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AdminModule { }
