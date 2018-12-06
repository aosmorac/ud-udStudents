import { Component } from '@angular/core';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';

import { TabsPage } from '../../pages/tabs/tabs';

import { GooglePlus } from '@ionic-native/google-plus';
import {NavController, Platform} from 'ionic-angular';


@Component({
  selector: 'google-login',
  templateUrl: 'google-login.html'
})
export class GoogleLoginComponent {

  user: firebase.User;

  constructor(private afAuth: AngularFireAuth,
              private gplus: GooglePlus,
              private platform: Platform,
              public navCtrl: NavController)
  {

    this.user = this.afAuth.auth.currentUser;

  }


  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin().then(user => {
        this.user = user;
        console.log(this.user);
        this.navCtrl.push(TabsPage);
      });
    } else {
      this.webGoogleLogin();
    }
  }


  async nativeGoogleLogin(): Promise<firebase.User> {
    try {

      const gplusUser = await this.gplus.login({
        'webClientId': '118660825580-771ahob3qvi5hmculgnbil13o8ctg045.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })

      return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken));

    } catch(err) {
      console.log(err);
    }
  }


  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

    } catch(err) {
      console.log(err)
    }

  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.user = null;
    });
  }


}
