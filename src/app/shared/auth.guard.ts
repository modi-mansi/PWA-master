import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('access-token');
    if (token) {
      // logged in so return true
      const user: any = JSON.parse(localStorage.getItem('user'));
      if (user) {
        return true;
      }
    }

    // not logged in so redirect to login page without the return url
    this.router.navigate(['']);
    return false;
  }

}
