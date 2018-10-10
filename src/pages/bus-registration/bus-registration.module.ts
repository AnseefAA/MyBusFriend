import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusRegistrationPage } from './bus-registration';

@NgModule({
  declarations: [
    BusRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(BusRegistrationPage),
  ],
})
export class BusRegistrationPageModule {}
