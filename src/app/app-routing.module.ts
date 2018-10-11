import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/components/home.component';
import {AdminGuard} from './core/guards/admin.guard';

const routes: Routes = [
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule', canLoad: [AdminGuard]},
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
