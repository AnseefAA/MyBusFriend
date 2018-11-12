import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Http,Headers,Response} from '@angular/http'
import { StaffProfilePage } from '../staff-profile/staff-profile';

/**
 * Generated class for the RoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-route',
  templateUrl: 'route.html',
})
export class RoutePage {
  public from:any;
  public to:any;
  public token:any;
  public msg:NavParams;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public toastCtrl:ToastController) {
    this.token=navParams.get('token');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoutePage');
  }

  addRoute(){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','Bearer '+this.token);
  
    let body={
      starting:this.from,
      stoping:this.to
    };
    this.http.post('http://localhost:55307/api/routes/addRoute',JSON.stringify(body),{headers:headers})
    .map((res:Response)=>res.json())
   .subscribe(data=>{console.log(data);
    this.msg=data;
    if(data.message=="Route added successfully"){
      this.navCtrl.push(StaffProfilePage,{
        token:this.token,
      });

    }
    else{
      const toast = this.toastCtrl.create({
        message: "Faild to add route",
        duration: 3000
      });
      toast.present();

    }
    
  }
   );

  }
}
//Route added successfully