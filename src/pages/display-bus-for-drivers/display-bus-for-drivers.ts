import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http,Headers,Response } from '@angular/http';
import { HomePage } from '../home/home';
import { DriverProfilePage } from '../driver-profile/driver-profile';

/**
 * Generated class for the DisplayBusForDriversPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display-bus-for-drivers',
  templateUrl: 'display-bus-for-drivers.html',
})
export class DisplayBusForDriversPage {
  public token:any;
  public items:any[];
  public msg:NavParams;
  public count:any;
  public busId:any;
    constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public toastCtrl:ToastController) {
      this.token=navParams.get('token');
      this .items=[];
      let headers=new Headers();
      headers.append('Content-Type','application/json');
      headers.append('Authorization','Bearer '+this.token);  
        this.http.get('http://localhost:55307/api/buses/loadBusForDrivers',{headers:headers})
        .map((res:Response)=>res.json())
      .subscribe(data=>{
      console.log(data);
      this.msg=data;
      this.count=data.count;
      for(let i=0;i<this.count;i++){
          this.items.push({
          text:this.msg.data[i].busName+"    "+this.msg.data[i].registrationId,
          });
        }    
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayBusForDriversPage');
  }
  setBus(bus){
    for(let i=0;i<this.count;i++){
      if(bus==this.msg.data[i].busName+"    "+this.msg.data[i].registrationId){
       
        this.busId=this.msg.data[i].busId;
        console.log(this.busId);
        break;


      }
    }
  }
  logOut(){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','Bearer '+this.token);
       this.http.get('http://localhost:55307/api/user/logout',{headers:headers})
       .map((res:Response)=>res.json())
      .subscribe(data=>{console.log(data);
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
    addDriver(){
      let headers=new Headers();
      headers.append('Content-Type','application/json');
      headers.append('Authorization','Bearer '+this.token);
      let body={
        busId:this.busId
      }
      this.http.post('http://localhost:55307/api/driver/AddBusDriver',JSON.stringify(body),{headers:headers})
      .map((res:Response)=>res.json())
  .subscribe(data=>{
  console.log(data);
 // this.msgDriver=data;  
  const toast = this.toastCtrl.create({
    message:data.message,
    duration: 3000
  });
  toast.present();
  if(data.message=='Bus added successfully')
  this.navCtrl.push(DriverProfilePage,{
    token:this.token
  });
  else{
    const toast = this.toastCtrl.create({
      message:"try Anpther bus",
      duration: 3000
    });
    toast.present();
  }
  });
 
    
    
    }
}
