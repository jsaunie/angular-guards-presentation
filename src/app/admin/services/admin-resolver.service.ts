import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminResolverService implements Resolve<string[]> {

  constructor(private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    if (confirm('[Resolver] Fetch data ?')) {
      return of(['feature 1', 'feature 2']);
    } else {
      this.router.navigate(['/']);
      return of(null);
    }
  }
  
}
