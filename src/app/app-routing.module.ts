import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AHomeComponent } from './admin/ahome/ahome.component';
import { AloginComponent } from './admin/alogin/alogin.component';
import { AuthGuard } from './auth.guard';
import { AdminCoursesListComponent } from './admin/admin-courses-list/admin-courses-list.component';
import { AdminModifyCourseComponent } from './admin/admin-modify-course/admin-modify-course.component';
import { EnrollComponent } from './Enrollment/enroll/enroll.component';
import { StudentEnrollListComponent } from './Enrollment/student-enroll-list/student-enroll-list.component';
import { UnenrollComponent } from './Enrollment/unenroll/unenroll.component';
import { CEHomeComponent } from './Home/cehome/cehome.component';
import { SloginComponent } from './User/slogin/slogin.component';
import { AdminEnrollListComponent } from './admin/admin-enroll-list/admin-enroll-list.component';
import { AdminAuthGuard } from './admin-auth.guard';
import { AdminCourseCountComponent } from './admin/admin-course-count/admin-course-count.component';
import { AdminEditCourseComponent } from './admin/admin-edit-course/admin-edit-course.component';


const routes: Routes = [
  {path:'AdminCoursesList',component:AdminCoursesListComponent,canActivate:[AdminAuthGuard]},
  // {path:'AdminModifyCourse/:cid',component:AdminModifyCourseComponent,canActivate:[AdminAuthGuard]},
  {path:'SLogin',component:SloginComponent},
  {path:'CEHome',component:CEHomeComponent},
  {path:'Enroll',component:EnrollComponent,canActivate: [AuthGuard]},
  {path:'StudentEnrollList',component:StudentEnrollListComponent,canActivate: [AuthGuard]},
  {path:'Unenroll/:id',component:UnenrollComponent,canActivate:[AuthGuard]},
  {path:'ALogin',component:AloginComponent},
  {path:'AHome',component:AHomeComponent,canActivate:[AdminAuthGuard]},
  {path:'AdminEnrollList',component:AdminEnrollListComponent,canActivate:[AdminAuthGuard]},
  {path:'AdminCourseCount',component:AdminCourseCountComponent,canActivate:[AdminAuthGuard]},
  {path:'AdminEditCourse/:cid',component:AdminEditCourseComponent,canActivate:[AdminAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
