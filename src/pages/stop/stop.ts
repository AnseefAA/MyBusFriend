import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AddStopsPage } from '../add-stops/add-stops';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the StopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stop',
  templateUrl: 'stop.html',
})
export class StopPage {
public token:any;
public stopCount:any;
public items:any[];
public msg:NavParams;
public count:any;
public routeId:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public toastCtrl:ToastController) {
    this.token=navParams.get('token');
    this .items=[];
    this.token=navParams.get('token');
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','Bearer '+this.token);

      this.http.get('http://localhost:55307/api/routes/loadAllRoutes',{headers:headers})
      .map((res:Response)=>res.json())
    .subscribe(data=>{
    console.log(data);
      this.msg=data;
      this.count=data.count;
      for(let i=0;i<this.count;i++){
        this.items.push({
          staring:this.msg.data[i].starting,
          stopong:this.msg.data[i].stoping,
          id:this.msg.data[i].routeId,
          text:this.msg.data[i].starting+"-"+this.msg.data[i].stoping,
         
        });
      }    
    });  
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StopPage');
  }
  setRoute(route){
    for(let i=0;i<this.count;i++){
      if(route==this.msg.data[i].starting+"-"+this.msg.data[i].stoping){
       
        this.routeId=this.msg.data[i].routeId;

      }
    }
  }
  addStop(){ 
    
  this.navCtrl.push(AddStopsPage,{
    token:this.token,
    stopCount:this.stopCount,
    routeId:this.routeId,
  });
    
}
}
