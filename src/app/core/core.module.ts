import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import Components from './components';
import Guards from './guards';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: Components,
  providers: Guards,
})
export class CoreModule {
}
