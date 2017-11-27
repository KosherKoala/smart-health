import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    let user = localStorage.getItem('currentUser');
    console.log(user)
    if (user) {
      this.router.navigate(['/profile']);
      return false
    }

    return true;
  }
}
