import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayBusForDriversPage } from './display-bus-for-drivers';

@NgModule({
  declarations: [
    DisplayBusForDriversPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayBusForDriversPage),
  ],
})
export class DisplayBusForDriversPageModule {}
