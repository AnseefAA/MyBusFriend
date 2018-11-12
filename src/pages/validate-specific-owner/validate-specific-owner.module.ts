import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidateSpecificOwnerPage } from './validate-specific-owner';

@NgModule({
  declarations: [
    ValidateSpecificOwnerPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidateSpecificOwnerPage),
  ],
})
export class ValidateSpecificOwnerPageModule {}
