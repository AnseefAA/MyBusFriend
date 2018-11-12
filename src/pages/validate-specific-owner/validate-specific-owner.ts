import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http,Headers,Response} from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { StaffProfilePage } from '../staff-profile/staff-profile';

/**
 * Generated class for the ValidateSpecificOwnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validate-specific-owner',
  templateUrl: 'validate-specific-owner.html',
})
export class ValidateSpecificOwnerPage {
  public id:any;
  public name:string;
  public street:string;
  public city:string;
  public contact:any;
  public email:any;
  public address:any;
  public token:any;
  public msg:NavParams;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public toastCtrl:ToastController) {
    this.id=navParams.get('id');
    this.name=navParams.get('name');
    this.address=navParams.get('address');
    this.street=navParams.get('street');
    this.city=navParams.get('city');
    this.email=navParams.get('email');
    this.contact=navParams.get('contact');
    this.token=navParams.get('token');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidateSpecificOwnerPage');
  }
validate(){
  let headers=new Headers();
  headers.append('Content-Type','application/json');
  headers.append('Authorization','Bearer '+this.token);

  let body={
    id:this.id,
     };
     this.http.post('http://localhost:55307/api/validate/validateOwner',JSON.stringify(body),{headers:headers})
     .map((res:Response)=>res.json())
    .subscribe(data=>{console.log(data);
     this.msg=data;
     if(data.message=='Successful'){
      const toast = this.toastCtrl.create({
        message: 'success fully validated',
        duration: 3000
      });
      toast.present();
       this.navCtrl.push(StaffProfilePage,{
         token:this.token,
       });
     }
    });
}
}
