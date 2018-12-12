import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PensumPage } from './pensum';

@NgModule({
  declarations: [
    PensumPage,
  ],
  imports: [
    IonicPageModule.forChild(PensumPage),
  ],
})
export class PensumPageModule {}
