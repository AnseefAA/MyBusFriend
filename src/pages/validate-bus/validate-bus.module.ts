import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidateBusPage } from './validate-bus';

@NgModule({
  declarations: [
    ValidateBusPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidateBusPage),
  ],
})
export class ValidateBusPageModule {}
