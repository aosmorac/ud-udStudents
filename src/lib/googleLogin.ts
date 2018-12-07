import { environment as ENV } from '../environments/environment' ;

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

import { GooglePlus } from '@ionic-native/google-plus';
import {Injectable} from "@angular/core";

@Injectable()
export class GoogleLogin
{
  user: firebase.User;
  webClientId;

  constructor(private afAuth: AngularFireAuth,
              private gplus: GooglePlus)
  {
    this.webClientId = ENV.google.webClientId;
  }


  async nativeLogin(): Promise<void>
  {
    try {

      const gplusUser = await this.gplus.login({
        'webClientId': this.webClientId,
        'offline': true,
        'scopes': 'profile email'
      });

      this.user = await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      );

    } catch(err) {
      console.log(err);
    }
  }


  async webLogin(): Promise<void>
  {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

    } catch(err) {
      console.log(err)
    }

  }

  signOut() {
    try {
      this.user = null;
      this.afAuth.auth.signOut();
    } catch(err) {
      console.log(err)
    }
  }

  getUser()
  {
    return this.user;
  }

}
