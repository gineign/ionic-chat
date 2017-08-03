import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { ChatService } from '../../services/chat';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  templateUrl: 'login.html',
})

export class LoginPage {
  name:string
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:AuthService, public chat:ChatService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(): void {
    console.log(this.name)
    this.auth.getToken(this.name).then((status) => {
      console.log(status)
      if (status) {
        this.chat.socketAuth();
        this.navCtrl.setRoot(TabsPage)
      }
    });
  }

}
