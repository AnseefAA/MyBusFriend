import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusOwnerProfilePage } from './bus-owner-profile';

@NgModule({
  declarations: [
    BusOwnerProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(BusOwnerProfilePage),
  ],
})
export class BusOwnerProfilePageModule {}
