import { environment as ENV } from '../environments/environment' ;

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { GoogleLoginComponent } from '../components/google-login/google-login';
import { Auth } from '../lib/auth';

import { HeaderMenuComponent } from '../components/header-menu/header-menu';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { PensumPage} from "../pages/pensum/pensum";
import { ClassSchedulePage} from "../pages/class-schedule/class-schedule";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { GooglePlus } from '@ionic-native/google-plus';

@NgModule({
  declarations: [
    MyApp,
    HeaderMenuComponent,
    TabsPage,
    LoginPage,
    ProfilePage,
    PensumPage,
    ClassSchedulePage,
    GoogleLoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(ENV.firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    ProfilePage,
    PensumPage,
    ClassSchedulePage,
    GoogleLoginComponent
  ],
  providers: [
    GooglePlus,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Auth
  ]
})
export class AppModule {}
