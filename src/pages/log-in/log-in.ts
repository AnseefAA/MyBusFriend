import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusOwnerProfilePage } from '../bus-owner-profile/bus-owner-profile';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {
  public username:any;
  public password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }
login()
{
  if(this.username&&this.password){
    this.navCtrl.push(BusOwnerProfilePage)
     }
  else{
    const toast = this.toastCtrl.create({
      message: 'empty field is not allowed',
      duration: 3000
    });
    toast.present();
  }
 
}
}


