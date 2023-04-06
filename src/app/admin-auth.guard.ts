import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './User/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private obj: UserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('admin auth');
      if (this.obj.isLoggedIn() == true && this.obj.currentUser.userRole == true)
      return true;
    else {
      alert("Please log in..");
     // this.router.navigateByUrl('ALogin');
      this.router.navigate(['/ALogin']);
      
      return false;
    }
  }
  
}
