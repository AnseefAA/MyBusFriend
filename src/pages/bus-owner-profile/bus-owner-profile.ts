import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BusRegistrationPage } from '../bus-registration/bus-registration';
import { Http,Headers,Response} from '@angular/http';
import { HomePage } from '../home/home';
import 'rxjs/add/operator/map';
import { DisplayBusPage } from '../display-bus/display-bus';
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
  public msg:NavParams;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public toastCtrl:ToastController) {
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
this.navCtrl.push(DisplayBusPage,{
  token:this.token
})
}
delBus(){
  
}
logOut(){
  let headers=new Headers();
  headers.append('Content-Type','application/json');
  headers.append('Authorization','Bearer '+this.token);

  
     this.http.get('http://localhost:55307/api/user/logout',{headers:headers})
     .map((res:Response)=>res.json())
    .subscribe(data=>{console.log(data);
     this.msg=data;
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
}
