import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class PatientGuard implements CanActivate {
  public currentUser;
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log(this.currentUser);

      // user is a doctor
        if (this.currentUser.patient) {
          return true
        }
        this.router.navigate(['/profile']);
        return false;
  }
}
