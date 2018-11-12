import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisplayRoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display-route',
  templateUrl: 'display-route.html',
})
export class DisplayRoutePage {
  public from:any;
  public to:any;
  public time:any;
  public bus1:any;
  public timestart1:any;
  public timereach1:any;
  public bus2:any;
  public timestart2:any;
  public timereach2:any;
  public bus3:any;
  public timestart3:any;
  public timereach3:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.from=navParams.get('from');
    this.to=navParams.get('to');
    this.time=navParams.get('time');
     this.bus1='bus1';
  this.timestart1='t1';
  this.timereach1='tr1';
  this.bus2='b2';
  this.timestart2='t2';
  this.timereach2='tr2';
  this.bus3='b3';
  this.timestart3='t3';
  this.timereach3='tr3';
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayRoutePage');
  }

nextRoute(){
  
}
}
