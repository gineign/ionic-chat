import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { tokenNotExpired } from 'angular2-jwt';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { AuthService } from '../services/auth';
import { ChatService } from '../services/chat';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  name: string;
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public auth:AuthService, public chat:ChatService) {

    if (tokenNotExpired()) {

      this.chat.socketAuth();
      this.rootPage = TabsPage;
    }else{
      this.rootPage = LoginPage;
    }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }


  loggedIn(): boolean {
    return tokenNotExpired();
  }

}
