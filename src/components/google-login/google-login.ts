import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

import { TabsPage } from '../../pages/tabs/tabs';

import { GoogleLogin } from '../../lib/googleLogin';


@Component({
  selector: 'google-login',
  templateUrl: 'google-login.html'
})


export class GoogleLoginComponent {

  user;

  constructor(private glogin: GoogleLogin,
              private platform: Platform,
              public navCtrl: NavController)
  {
    this.user = this.glogin.getUser();
  }


  googleLogin() {
    if (this.platform.is('cordova')) {
      this.glogin.nativeLogin().then(() => {
        this.user = this.glogin.getUser();
        console.log(this.user);
        // this.navCtrl.push(TabsPage);
      });
    } else {
      this.glogin.webLogin();
    }
  }


  signOut() {
    this.glogin.signOut();
    this.user = this.glogin.getUser();
  }


}
