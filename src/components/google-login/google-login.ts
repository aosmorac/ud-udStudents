import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

import { TabsPage } from '../../pages/tabs/tabs';

import { Auth } from '../../lib/auth';


@Component({
  selector: 'google-login',
  templateUrl: 'google-login.html'
})


export class GoogleLoginComponent {

  user;

  constructor(private auth: Auth,
              private platform: Platform,
              public navCtrl: NavController)
  {
    this.user = this.auth.getUser();
  }


  googleLogin() {
    if (this.platform.is('cordova')) {
      this.auth.nativeLogin().then(() => {
        this.user = this.auth.getUser();
        this.navCtrl.push(TabsPage);
      });
    } else {
      this.auth.webLogin();
    }
  }


  signOut() {
    this.auth.signOut();
    this.user = this.auth.getUser();
  }


}
