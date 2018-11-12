import { Component, ValueProvider } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the DisplayBusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display-bus',
  templateUrl: 'display-bus.html',
})
export class DisplayBusPage {
public token:any;
public items:any[];
public count:any;
public msg:NavParams;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
      this.token=navParams.get('token');
      this .items=[];
      let headers=new Headers();
      headers.append('Content-Type','application/json');
      headers.append('Authorization','Bearer '+this.token);  
        this.http.get('http://localhost:55307/api/buses/loadBusByOwner',{headers:headers})
        .map((res:Response)=>res.json())
      .subscribe(data=>{
      console.log(data);
        this.msg=data;
        this.count=data.count;
        for(let i=0;i<this.count;i++){
          this.items.push({
            busName:this.msg.data[i].busName+" ",
            registrationId:this.msg.data[i].registrationId,
            disp:this.msg.data[i].busName+"    "+this.msg.data[i].registrationId,
            busId:this.msg.data[i].busId,
            ownerId:this.msg.data[i].ownerId,
            seats:this.msg.data[i].seats,
          
          });
        }    
      });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayBusPage');
  }
  viewBus(item){

  }
}
