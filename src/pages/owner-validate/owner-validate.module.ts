import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnerValidatePage } from './owner-validate';

@NgModule({
  declarations: [
    OwnerValidatePage,
  ],
  imports: [
    IonicPageModule.forChild(OwnerValidatePage),
  ],
})
export class OwnerValidatePageModule {}
