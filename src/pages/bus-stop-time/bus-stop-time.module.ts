import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusStopTimePage } from './bus-stop-time';

@NgModule({
  declarations: [
    BusStopTimePage,
  ],
  imports: [
    IonicPageModule.forChild(BusStopTimePage),
  ],
})
export class BusStopTimePageModule {}
