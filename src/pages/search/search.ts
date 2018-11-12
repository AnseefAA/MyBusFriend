import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {DisplayRoutePage} from '../display-route/display-route'
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public from:any;
  public to:any;
  public bustime:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
busSearch(){
  if(!this.from){
    const toast = this.toastCtrl.create({
      message: 'enter the source',
      duration: 3000
    });
    toast.present();    
  }
  else if(!this.to){
    const toast = this.toastCtrl.create({
      message: 'enter the destination',
      duration: 3000
    });
    toast.present();  
  }
  else if(!this.bustime){
    const toast = this.toastCtrl.create({
      message: 'specify the time',
      duration: 3000
    });
    toast.present();  
  }
  else{
    this.navCtrl.push(DisplayRoutePage,{
      from:this.from,
      to:this.to,
      time:this.bustime
    })
  }
  
}
}
