import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/components/home.component';

const routes: Routes = [
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: '', pathMatch: 'full', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
