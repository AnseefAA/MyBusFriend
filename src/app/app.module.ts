import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
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
import { ReadProvider } from '../providers/read/read';
import { StaffProfilePage } from '../pages/staff-profile/staff-profile';
import { DriverProfilePage } from '../pages/driver-profile/driver-profile';
import { RoutePage} from '../pages/route/route';
import {StopPage} from '../pages/stop/stop';
import { OwnerValidatePage} from '../pages/owner-validate/owner-validate';
import { ValidateSpecificOwnerPage} from '../pages/validate-specific-owner/validate-specific-owner';
import { ValidateSpecificBusPage } from '../pages/validate-specific-bus/validate-specific-bus';
import { ValidateBusPage } from '../pages/validate-bus/validate-bus';
import { ChangeOwnerPage } from '../pages/change-owner/change-owner';
import { AddStopsPage } from '../pages/add-stops/add-stops';
import { DisplayBusPage } from '../pages/display-bus/display-bus';
import { DisplayBusForDriversPage } from '../pages/display-bus-for-drivers/display-bus-for-drivers';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserRegistrationPage,
    LogInPage,
    BusRegistrationPage,
    RegistrationTwoPage,
    SearchPage,ChangeOwnerPage,
    BusOwnerProfilePage,DisplayBusForDriversPage,
    DisplayRoutePage,ValidateBusPage,
    StaffProfilePage,RoutePage,DisplayBusPage,
    DriverProfilePage,StopPage,OwnerValidatePage,
    ValidateSpecificOwnerPage,ValidateSpecificBusPage,AddStopsPage
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
    UserRegistrationPage,
    LogInPage,
    BusRegistrationPage,
    RegistrationTwoPage,DisplayBusForDriversPage,
    SearchPage,BusOwnerProfilePage,
    DisplayRoutePage,DriverProfilePage,
    StaffProfilePage,StopPage,OwnerValidatePage,
    RoutePage,DisplayBusPage,
    ValidateSpecificOwnerPage,ValidateSpecificBusPage,
    ValidateBusPage,ChangeOwnerPage,AddStopsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReadProvider
  ]
})
export class AppModule {}
