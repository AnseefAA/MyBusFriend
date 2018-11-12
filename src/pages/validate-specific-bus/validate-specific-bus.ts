import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http,Headers,Response} from '@angular/http';
import { ToastController } from 'ionic-angular';
import { StaffProfilePage } from '../staff-profile/staff-profile';
/**
 * Generated class for the ValidateSpecificBusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validate-specific-bus',
  templateUrl: 'validate-specific-bus.html',
})
export class ValidateSpecificBusPage {
  public busId:any;
  public regId:any;
  public busName:any;
  public  ownerId:any;
  public seats:any;
   public token:any;
   public data:JSON;
   public msg:NavParams;
   public ownerName:any;
   public city:any;
   public houseName:any;
   public street:any;
   public contact:any;
   public headers:Headers;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public toastCtrl:ToastController) {
    this.busId=navParams.get('busId');
    this.regId=navParams.get('regId');
    this.busName=navParams.get('busName');
    this.ownerId=navParams.get('ownerId');
    this.token=navParams.get('token');
    this.seats=navParams.get('seats');
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','Bearer '+this.token);
    let body={
      id:this.ownerId,
    };

      this.http.post('http://localhost:55307/api/validate/getOwnerOfBus',JSON.stringify(body),{headers:headers})
      .map((res:Response)=>res.json())
    .subscribe(data=>{
    console.log(data);
      this.msg=data;      
         this.ownerName=this.msg.data.name,
         this.houseName=this.msg.data.houseName,
         this.city=this.msg.data.city,
         this.street=this.msg.data.street,
         this.contact=this.msg.data.phoneNumber       
      }    
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidateSpecificBusPage');
  }
  validateBus(){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','Bearer '+this.token);
    let body={
      busId:this.busId,
    };
    this.http.post('http://localhost:55307/api/validate/validateBus',JSON.stringify(body),{headers:headers})
    .map((res:Response)=>res.json())
   .subscribe(data=>{console.log(data);
    this.msg=data;
    if(data.message=='Successful'){
     const toast = this.toastCtrl.create({
       message: 'successfully validated',
       duration: 3000
     });
     toast.present();
      this.navCtrl.push(StaffProfilePage,{
        token:this.token,
      });
    }
    else{
      const toast = this.toastCtrl.create({
        message: 'validation failed',
        duration: 3000
      });
      toast.present();
    }
   });

  }

}
