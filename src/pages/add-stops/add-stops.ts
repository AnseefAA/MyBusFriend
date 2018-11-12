import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Http,Headers,Response} from '@angular/http';
import { StaffProfilePage } from '../staff-profile/staff-profile';

/**
 * Generated class for the AddStopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-stops',
  templateUrl: 'add-stops.html',
})
export class AddStopsPage {
  public stopCount:any;
  public token:any;
  public stopName:any;
  public stopTime:any;
  public heading:any;
  public routeId:any;
  public msg:NavParams;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public toastCtrl:ToastController) {
    this.stopCount=navParams.get('stopCount');
    this.token=navParams.get('token');
    this.routeId=navParams.get('routeId');
    
    this.heading="Stop Detail -";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStopsPage');
  }
  addStop(){
    if(this.stopCount>1){
      let headers=new Headers;
      headers.append('Content-Type','application/json');
      headers.append('Authorization','Bearer '+this.token);
      console.log(this.routeId+" "+this.stopName+this.stopTime)
      let body={
        routeId:this.routeId,
        stopName:this.stopName,
        timeTaken:this.stopTime,
        returnTime :this.stopTime,
      }
      this.http.post('http://localhost:55307/api/stop/addStops',JSON.stringify(body),{headers:headers})
    .map((res:Response)=>res.json())
    .subscribe(data=>{
    console.log(data);
    this.msg=data;
    
    if(data.message=="Stop added successfully"){
      const toast = this.toastCtrl.create({
        message: 'stop is added successfully',
        duration: 3000
      });
      toast.present();   
      this.stopCount-=1;
      this.stopName="";
      this.stopTime="";
      }   
    });    
    }
    else{
      let headers=new Headers;
      headers.append('Content-Type','application/json');
      headers.append('Authorization','Bearer '+this.token);
      let body={
          routeId:this.routeId
        };
        this.http.post('http://localhost:55307/api/routes/updateRouteStatus',JSON.stringify(body),{headers:headers})
        .map((res:Response)=>res.json())
        .subscribe(data=>{
          console.log(data);
          this.msg=data;
          if(data.message=="Successful"){
            const toast = this.toastCtrl.create({
              message: 'stop is added completes successfully',
              duration: 3000
            });
            toast.present();
            this.navCtrl.push(StaffProfilePage,{
              token:this.token
            });
          }

        });
    }//else close
    
  }

}       

 
  
 
   
  
  

     