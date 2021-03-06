import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {FeaturesComponent} from './components/features/features.component';
import {UsersComponent} from './components/users/users.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: '', component: FeaturesComponent, pathMatch: 'full'},
      {path: 'users', component: UsersComponent},
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
