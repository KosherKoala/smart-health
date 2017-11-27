import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DoctorGuard implements CanActivate {
  public currentUser;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));


      // user is a doctor
        if (this.currentUser.doctor) {
          return true
        }
        return false;
  }
}
