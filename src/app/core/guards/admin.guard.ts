import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanDeactivate, CanLoad} from '@angular/router';
import {Observable} from 'rxjs';
import {UsersComponent} from '../../admin/components/users/users.component';
import {Route} from '@angular/router/src/config';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild, CanDeactivate<UsersComponent>, CanLoad {

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('[canActivateChild] Are you allowed to access child route?');
  }

  canDeactivate(
    component: UsersComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('[CanLoad] Do you want to access this module ?');
  }

}
