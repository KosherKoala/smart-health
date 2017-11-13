import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService, HistoryService, UserService } from '../../services';
import { Router } from '@angular/router';


@Injectable()
export class HistoryGuard implements CanActivate {

  public currentUser;
  public result: boolean;

  constructor(private userService: UserService, private historyService: HistoryService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log(this.currentUser);

      // user is a doctor
        if (this.currentUser.doctor) {
          return true
        }
        return false;

      // user has history with patient
  }
}
