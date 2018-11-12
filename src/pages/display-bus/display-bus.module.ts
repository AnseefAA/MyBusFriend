import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayBusPage } from './display-bus';

@NgModule({
  declarations: [
    DisplayBusPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayBusPage),
  ],
})
export class DisplayBusPageModule {}
