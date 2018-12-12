import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Curriculum } from "../../lib/curriculum";

/**
 * Generated class for the PensumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pensum',
  templateUrl: 'pensum.html',
})
export class PensumPage {

  curriculum: Curriculum;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.curriculum = new Curriculum();
  }

  printCurriculum()
  {
    console.log(this.curriculum);
    console.log(this.curriculum.getPensum());
  }

  printSubjects()
  {
    console.log(this.curriculum.getSubjects());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PensumPage');
  }

}
