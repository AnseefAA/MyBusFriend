import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidateSpecificBusPage } from './validate-specific-bus';

@NgModule({
  declarations: [
    ValidateSpecificBusPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidateSpecificBusPage),
  ],
})
export class ValidateSpecificBusPageModule {}
