import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {FeaturesComponent} from './components/features/features.component';
import {UsersComponent} from './components/users/users.component';
import {AdminGuard} from '../core/guards/admin.guard';
import {AdminResolverService} from './services/admin-resolver.service';
import {TestGuard} from '../core/guards/test.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivateChild: [AdminGuard, TestGuard],
    canActivate: [TestGuard],
    children: [
      {
        path: '',
        component: FeaturesComponent,
        pathMatch: 'full',
        canActivate: [AdminGuard],
        resolve: {
          features: AdminResolverService
        }
      },
      {path: 'users', component: UsersComponent, canActivate: [AdminGuard], canDeactivate: [AdminGuard]},
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AdminComponent, FeaturesComponent, UsersComponent],
  exports: [RouterModule],
})
export class AdminModule {
}
