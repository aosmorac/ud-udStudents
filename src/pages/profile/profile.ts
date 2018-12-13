import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Auth} from "../../lib/auth";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage
{

  user;

  constructor(private auth: Auth,
              public navCtrl: NavController,
              public navParams: NavParams)
  {
    this.user = this.auth.getUser();
    console.log(this.user);
  }

  notifyAndUpdateIsToggled()
  {
    console.log(this.user.phoneNumber.public);
    console.log(this.user.phoneNumber.number);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
