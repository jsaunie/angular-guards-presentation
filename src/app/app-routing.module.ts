import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/components/home.component';
import {CanActivateComponent} from './core/components/can-activate.component';
import {AuthGuard} from './core/guards/auth/auth.guard';

const routes: Routes = [
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: 'canActivate', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', pathMatch: 'full', component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
