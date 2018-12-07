import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

import { GooglePlus } from '@ionic-native/google-plus';
import {TabsPage} from "../pages/tabs/tabs";

export class GoogleLogin2
{
  private afAuth: AngularFireAuth;
  private gplus: GooglePlus;

  user: firebase.User;
  webClientId;

  constructor()
  {
    this.webClientId = '118660825580-771ahob3qvi5hmculgnbil13o8ctg045.apps.googleusercontent.com';
  }


  async nativeLogin()
  {
    try {

      const gplusUser = await this.gplus.login({
        'webClientId': this.webClientId,
        'offline': true,
        'scopes': 'profile email'
      });

      this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      ).then(user => {
        this.user = user;
        return true;
      });

    } catch(err) {
      console.log(err);
      return false;
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
    this.afAuth.auth.signOut().then(() => {
      this.user = null;
    });
  }

  getUser()
  {
    return this.user;
  }

}
