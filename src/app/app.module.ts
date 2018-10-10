import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailPage } from '../pages/detail/detail';
import { UserRegistrationPage } from '../pages/user-registration/user-registration';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LogInPage } from '../pages/log-in/log-in';
import { BusRegistrationPage } from '../pages/bus-registration/bus-registration';
import { RegistrationTwoPage } from '../pages/registration-two/registration-two';
import { SearchPage } from '../pages/search/search';
import { BusOwnerProfilePage } from '../pages/bus-owner-profile/bus-owner-profile';
import { DisplayRoutePage } from '../pages/display-route/display-route';
import {HttpModule} from '@angular/http'
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    UserRegistrationPage,
    LogInPage,
    BusRegistrationPage,
    RegistrationTwoPage,
    SearchPage,
    BusOwnerProfilePage,DisplayRoutePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    UserRegistrationPage,
    LogInPage,
    BusRegistrationPage,
    RegistrationTwoPage,
    SearchPage,BusOwnerProfilePage,
    DisplayRoutePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
