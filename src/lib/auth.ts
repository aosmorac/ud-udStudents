import { environment as ENV } from '../environments/environment' ;

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

import { GooglePlus } from '@ionic-native/google-plus';
import {Injectable} from "@angular/core";

import {UdStudentsApi} from '../lib/udStudentsApi';

import {Curriculum} from "./curriculum";

@Injectable()
export class Auth
{
  user: object;
  webClientId;
  api;

  constructor(private afAuth: AngularFireAuth,
              private gplus: GooglePlus)
  {
    this.webClientId = ENV.google.webClientId;
    this.api = new UdStudentsApi();
  }


  async nativeLogin(): Promise<boolean>
  {
    try {
      const gplusUser = await this.gplus.login({
        'webClientId': this.webClientId,
        'offline': true,
        'scopes': 'profile email'
      });

      return this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      ).then( async data => {
        this.user = await this.api.getUserLogged(data.email, data.uid);
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
