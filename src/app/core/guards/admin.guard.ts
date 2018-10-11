import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';
import {UsersComponent} from '../../admin/components/users/users.component';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild, CanDeactivate<UsersComponent> {

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('Are you allowed to access child route?');
  }

  canDeactivate(
    component: UsersComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }

}
