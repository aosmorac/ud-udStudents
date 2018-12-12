import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as moment from 'moment';

/**
 * Generated class for the ClassSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-schedule',
  templateUrl: 'class-schedule.html',
})
export class ClassSchedulePage {

  currentDate;
  currentTime;
  currentWeekDay;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.updateDateTime();

  }

  updateDateTime()
  {
    this.currentDate = moment().format('YYYY-MM-DD');
    this.currentTime = moment().format('h:mm:ss a');
    this.currentWeekDay = moment().format('dddd');
    setTimeout(() => {
      this.updateDateTime();
    }, 1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassSchedulePage');
  }

}
