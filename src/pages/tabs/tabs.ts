import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { ClassSchedulePage } from "../class-schedule/class-schedule";
import { PensumPage} from "../pensum/pensum";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = ClassSchedulePage;
  tab3Root = PensumPage;

  constructor() {

  }
}
