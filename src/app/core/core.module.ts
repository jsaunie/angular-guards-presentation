import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import Components from './components';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: Components
})
export class CoreModule { }
