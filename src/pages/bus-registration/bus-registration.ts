import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {Http,Headers} from '@angular/http'
/**
 * Generated class for the BusRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bus-registration',
  templateUrl: 'bus-registration.html',
})
export class BusRegistrationPage {
  public busname:any;
  public registrationId:any;
  public seats:any;
  public ownerid:any;
    constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusRegistrationPage');
  }
register(){

  if(this.busname&&this.registrationId&&this.seats){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
  
    let body={
      busname:this.busname,
    registrationId:this.registrationId,
    seats:this.seats,
    pownerId:this.ownerid,
        };
  
    this.http.post('http://localhost:55307/api/buses/addbus',JSON.stringify(body),{headers:headers})
    .subscribe(data=>{
    console.log(data);
      
    
    });
   
      const toast = this.toastCtrl.create({
        message: 'successful',
        duration: 3000
      });
      toast.present();
      
  }
  else{
    const toast = this.toastCtrl.create({
      message: 'all fields are required are required',
      duration: 3000
    });
    toast.present();
  }

}
}
