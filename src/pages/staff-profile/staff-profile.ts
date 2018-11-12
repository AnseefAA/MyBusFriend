import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OwnerValidatePage} from '../owner-validate/owner-validate';
import {RoutePage} from '../route/route';
import {StopPage}from '../stop/stop';
import {ValidateBusPage} from '../validate-bus/validate-bus'
import {Http,Headers,Response} from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HomePage } from '../home/home';
import { ChangeOwnerPage } from '../change-owner/change-owner';

/**
 * Generated class for the StaffProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-profile',
  templateUrl: 'staff-profile.html',
})
export class StaffProfilePage {
  public token:any;
  public msg:NavParams;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public toastCtrl:ToastController) {
    this.token=navParams.get('token')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffProfilePage');
  }
  validateOwner(){
    this.navCtrl.push(OwnerValidatePage,{
      token:this.token
    });

  }
  addRoute(){
    this.navCtrl.push(RoutePage,{
      token:this.token
    });

  }
  addStop(){
    this.navCtrl.push(StopPage,{
      token:this.token
    });

  }
  validateBus(){
    this.navCtrl.push(ValidateBusPage,{
      token:this.token
    });

  }
  changeOwner(){
   this.navCtrl.push(ChangeOwnerPage,{
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
