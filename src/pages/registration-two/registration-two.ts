import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Http,Headers} from '@angular/http'
/**
 * Generated class for the RegistrationTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration-two',
  templateUrl: 'registration-two.html',
})
export class RegistrationTwoPage {
  
 public name:string;
 public email:string;
 public userType:string;
 public password:string;
 public houseName:any;
 public city:any;
 public street:any;
 public districtId:any;
 public adharId:any;
 public phoneNumber:any;
 public gender:any;
 public result:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,public http:Http) {
    this.name=navParams.get('name');
    this.email=navParams.get('email');
    this.userType=navParams.get('usertype');
    this.password=navParams.get('password');
    
      
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationTwoPage');
  }
setGender(){
  
}
registUser(){
if(this.houseName&&this.districtId&&this.street){
  let headers=new Headers();
  headers.append('Content-Type','application/json');

  let body={
    name:this.name,
  email:this.email,
  userType:this.userType,
  password:this.password,
  houseName:this.houseName,
  city:this.city,
  street:this.city,
  districtId:this.districtId,
  adharId:this.adharId,
  phoneNumber:this.phoneNumber,
  gender:this.gender,
  };

  this.http.post('http://localhost:5000/api/auth/register',JSON.stringify(body),{headers:headers})
  .subscribe(data=>{
  console.log(data);
  this.result=data;  
  });
 
    const toast = this.toastCtrl.create({
      message: 'successful',
      duration: 3000
    });
    toast.present();
  
  
  
}
else{
  const toast = this.toastCtrl.create({
    message: 'HouseName,districtId and street are required',
    duration: 3000
  });
  toast.present();
}
}

}

