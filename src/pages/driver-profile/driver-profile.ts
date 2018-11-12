import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DisplayBusForDriversPage } from '../display-bus-for-drivers/display-bus-for-drivers';
import { Http ,Headers,Response} from '@angular/http';
import { HomePage } from '../home/home';

/**
 * Generated class for the DriverProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-profile',
  templateUrl: 'driver-profile.html',
})
export class DriverProfilePage {
  public token:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public toastCtrl:ToastController) {
    this.token=navParams.get('token');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverProfilePage');
  }
  viewtBus(){
this.navCtrl.push(DisplayBusForDriversPage,{
  token:this.token
})
}
logOut(){
  let headers=new Headers();
  headers.append('Content-Type','application/json');
  headers.append('Authorization','Bearer '+this.token);
     this.http.get('http://localhost:55307/api/user/logout',{headers:headers})
     .map((res:Response)=>res.json())
    .subscribe(data=>{console.log(data);
    // this.msg=data;
     if(data.message=='Logout successfull'){
     this.navCtrl.push(HomePage);
     }
     else{
      const toast = this.toastCtrl.create({
        message: 'error in log out',
        duration: 3000
      });
      toast.present();
     }
    });
}
viewPassengers(){
  
}
}
