import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Auth} from "../../lib/auth";

import * as moment from 'moment';
import {Schedule} from "../../lib/schedule";

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
export class ClassSchedulePage
{
  user;
  schedule;
  subjects;

  currentDate;
  currentTime;
  currentWeekDay;

  today;

  selectedWeekDay;

  constructor(private auth: Auth,
              public navCtrl: NavController,
              public navParams: NavParams)
  {
    moment.locale('es');
    this.today = moment().format('dddd - MMMM DD, YYYY');

    this.user = this.auth.getUser();

    moment.locale('en');
    this.selectedWeekDay =  moment().format('dddd');
    this.updateDateTime();

    this.schedule = new Schedule();
    this.schedule.downloadStudentSchedule().then(downloaded => {
      this.loadSubjects();
    });

  }

  updateDateTime()
  {
    moment.locale('en');
    this.currentDate = moment().format('YYYY-MM-DD');
    this.currentTime = moment().format('HH:mm:ss');
    this.currentWeekDay = moment().format('dddd');
    setTimeout(() => {
      this.updateDateTime();
    }, 1000);
  }

  updateSelectedWeekDay()
  {
    this.loadSubjects();
  }

  loadSubjects()
  {
    let tmpSubjescts = this.schedule.getScheduleByDay(this.selectedWeekDay);
    let subjectsArray = [];
    for (let key in tmpSubjescts) {
      subjectsArray.push(tmpSubjescts[key]);
    }
    this.subjects = subjectsArray;
    console.log(this.subjects);
  }


  getAvailableDays()
  {
    let days = [
                {'id': 'Monday', 'name': 'Lunes'},
                {'id': 'Tuesday', 'name': 'Martes'},
                {'id': 'Wednesday', 'name': 'Miercoles'},
                {'id': 'Thursday', 'name': 'Jueves'},
                {'id': 'Friday', 'name': 'Viernes'},
                {'id': 'Saturday', 'name': 'Sabado'},
                {'id': 'Sunday', 'name': 'Domingo'}
    ];

    return days;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassSchedulePage');
  }

}
