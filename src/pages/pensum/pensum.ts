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
  pensumProgram: object;
  subjects:object;

  currentPensumLevel;


  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.currentPensumLevel = 1;

    this.curriculum = new Curriculum();
    this.curriculum.downloadCurriculum().then(downloaded => {
      this.pensumProgram = this.curriculum.getPensum();
      this.subjects = this.curriculum.getSubjectsByLevel(this.currentPensumLevel);
    });

  }

  printCurriculum()
  {
    console.log(this.pensumProgram);
  }

  printSubjects()
  {
    console.log(this.subjects);
  }

  updateLevel()
  {
    this.subjects = this.curriculum.getSubjectsByLevel(this.currentPensumLevel);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PensumPage');
  }



}
