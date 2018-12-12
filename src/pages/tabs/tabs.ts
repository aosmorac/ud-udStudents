import { Component } from '@angular/core';

import { HomePage } from '../home/home';

import { ProfilePage } from '../profile/profile';
import { PensumPage} from "../pensum/pensum";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = HomePage;
  tab3Root = PensumPage;

  constructor() {

  }
}
