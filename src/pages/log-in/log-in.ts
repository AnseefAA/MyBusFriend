import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusOwnerProfilePage } from '../bus-owner-profile/bus-owner-profile';
import { ToastController } from 'ionic-angular';
//import { MaxLengthValidator } from '@angular/forms';
import {Http,Headers,Response} from '@angular/http';
import {DriverProfilePage} from '../driver-profile/driver-profile';
import {StaffProfilePage}from '../staff-profile/staff-profile';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ChangeOwnerPage } from '../change-owner/change-owner';
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
  public url:string;
  public data:JSON;
  public x:NavParams;
  public msg:NavParams;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,public http:Http) {
  
}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }
  test(){
    this.navCtrl.push(ChangeOwnerPage)
  }

  
login()
{
   if(!this.username){
    const toast = this.toastCtrl.create({
      message: 'enter the username',
      duration: 3000
    });
    toast.present();
   
     }
     else if(!this.password)
     {
      const toast = this.toastCtrl.create({
        message: 'enter the password ',
        duration: 3000
      });
      toast.present();
     
     }
     
  else{
    let headers=new Headers();
    headers.append('Content-Type','application/json');
  
    let body={
      userName:this.username,
      password:this.password
    };
  
   this.http.post('http://localhost:55307/api/user/login',JSON.stringify(body),{headers:headers})
    .map((res:Response)=>res.json())
   .subscribe(data=>{console.log(data);
    this.msg=data;
    console.log(this.msg.data.accessToken);
    if(this.msg.data.userRole==0)
        this.navCtrl.push(BusOwnerProfilePage,{
      token:this.msg.data.accessToken      
    });
    else if(this.msg.data.userRole==1)
    {
        this.navCtrl.push(DriverProfilePage,{
      token:this.msg.data.accessToken      
    });}
    else if(this.msg.data.userRole==2){
      this.navCtrl.push(StaffProfilePage,{
      token:this.msg.data.accessToken      
    });
    
  }
  else{
    const toast = this.toastCtrl.create({
      message: 'invalid login',
      duration: 3000
    });
    toast.present();
   }
  }
   );
  }
    
  }
 
}