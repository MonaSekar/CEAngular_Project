import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './User/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private obj: UserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    {
      console.log('student auth');
      if (this.obj.isLoggedIn() == true && this.obj.currentUser.userRole == false)
        return true;
      else {
        this.router.navigateByUrl('SLogin');
        alert("Please log in..");
        return false;
      }
    }

  }
}
