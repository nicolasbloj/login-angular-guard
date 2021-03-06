import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SimpleAuthGuard implements CanActivate {

  //constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot ,
    state: RouterStateSnapshot ) : Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
