import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddStopsPage } from './add-stops';

@NgModule({
  declarations: [
    AddStopsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddStopsPage),
  ],
})
export class AddStopsPageModule {}
