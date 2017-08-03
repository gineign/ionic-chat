import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';

@Component({
    templateUrl: 'settings.html'
})

export class Settings {

  constructor(public auth: AuthService) { }

  public logout(): void {
    this.auth.logout();
  }
}
