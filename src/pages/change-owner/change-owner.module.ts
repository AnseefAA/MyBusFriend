import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeOwnerPage } from './change-owner';

@NgModule({
  declarations: [
    ChangeOwnerPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeOwnerPage),
  ],
})
export class ChangeOwnerPageModule {}
