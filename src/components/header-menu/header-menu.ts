import {Component} from '@angular/core';
import {App, Nav, MenuController} from 'ionic-angular';

import { Auth } from '../../lib/auth';
import {LoginPage} from "../../pages/login/login";

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})

export class HeaderMenuComponent {

  constructor(
    private auth: Auth,
    public menuCtrl: MenuController,
    public app: App) {
    console.log('Hello HeaderMenuComponent Component');
  }

  logoutClicked() {
    this.auth.signOut();
    this.menuCtrl.close();
    let nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
  }
}
