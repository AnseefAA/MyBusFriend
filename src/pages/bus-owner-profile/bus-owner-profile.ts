import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusRegistrationPage } from '../bus-registration/bus-registration';

/**
 * Generated class for the BusOwnerProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bus-owner-profile',
  templateUrl: 'bus-owner-profile.html',
})
export class BusOwnerProfilePage {
  public token:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.token=navParams.get('token');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusOwnerProfilePage');
  }
addBus()
{
  this.navCtrl.push(BusRegistrationPage,{
    token:this.token
  })
}
viewBus()
{

}
}
