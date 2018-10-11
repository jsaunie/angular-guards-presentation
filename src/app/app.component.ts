import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>CanActivateChild</h1>
      <h2>Checking child route access</h2>

      <div class="nav">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
        <a routerLink="/admin" routerLinkActive="active">Admin</a>
      </div>

      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'guards';
}
