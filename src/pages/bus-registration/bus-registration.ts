import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {Http,Headers,Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BusOwnerProfilePage } from '../bus-owner-profile/bus-owner-profile';
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
  public token:any;
  public msg:NavParams;
  public message:any;
  public items:any[];
  public count:any;
  public msgbus:NavParams;
  public routeId:any;
    constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public toastCtrl:ToastController) {
      this.token=navParams.get('token');
      this .items=[];
    this.token=navParams.get('token');
        let headers=new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','Bearer '+this.token);

      this.http.get('http://localhost:55307/api/routes/loadRoutesForBus',{headers:headers})
      .map((res:Response)=>res.json())
    .subscribe(data=>{
    console.log(data);
      this.msgbus=data;
      this.count=data.count;
      for(let i=0;i<this.count;i++){
        this.items.push({        
          routeId:this.msgbus.data[i].routeId,
          show:this.msgbus.data[i].starting+"  "+this.msgbus.data[i].stoping,
        });
      }    
    }); 
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusRegistrationPage');
  }
register(){

  if(this.busname&&this.registrationId&&this.seats){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','Bearer '+this.token);  
    let body={
      busname:this.busname,
    registrationId:this.registrationId,
    seats:this.seats,
    routeId:this.routeId,
    };
  
    this.http.post('http://localhost:55307/api/buses/addbus',JSON.stringify(body),{headers:headers})
    .map((res:Response)=>res.json())
    .subscribe(data=>{
    console.log(data);
    this.msg=data;
    console.log(this.msg.data.accessToken);
    if(this.msg.data.id!="Bus added successfully"){
      this.navCtrl.push(BusOwnerProfilePage,{
        token:this.token    
      }); 
    } 
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
setRouteId(routeName){
  for(let i=0;i<this.count;i++){
    if(routeName==this.msgbus.data[i].starting+"  "+this.msgbus.data[i].stoping){
     
      this.routeId=this.msgbus.data[i].routeId;
      console.log(this.routeId);
      break;


    }
  }

  
}
}
