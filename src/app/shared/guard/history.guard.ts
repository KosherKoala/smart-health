import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService, HistoryService, UserService,DoctorService } from '../../services';
import { Router } from '@angular/router';


@Injectable()
export class HistoryGuard implements CanActivate {

  public currentUser;
  public result: boolean;
  public pass = false;
  public complete = false;

  constructor(private doctorService: DoctorService, private historyService: HistoryService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log("params", next.params);
      // user is a doctor
        if (this.currentUser.doctor) {
         return this.historyService.getHistory( {doctor: this.currentUser.doctor._id, patient: next.params.id} )
            .then( (data: any) => {
                                    if (data.success) {
                                      return true;
                                    } else {
                                      this.router.navigate(['/not-found']);
                                      return false
                                    }
                                  });
        } else {

          this.router.navigate(['/not-found']);
          return false;
        }

      // user has history with patient
  }
}
