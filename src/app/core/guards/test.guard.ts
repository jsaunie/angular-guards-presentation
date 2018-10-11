import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanDeactivate, CanLoad, CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import {UsersComponent} from '../../admin/components/users/users.component';
import {Route} from '@angular/router/src/config';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivateChild,CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('[canActivate] Test guard');
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('[canActivateChild] Test guard');
  }


}
