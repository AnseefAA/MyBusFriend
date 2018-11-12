import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { ValidateSpecificBusPage } from '../validate-specific-bus/validate-specific-bus';

/**
 * Generated class for the ValidateBusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validate-bus',
  templateUrl: 'validate-bus.html',
})
export class ValidateBusPage {
  public items:any[];
  public token:any;
  public msg:NavParams;
  public data:JSON;
  public count:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this .items=[];
    this.token=navParams.get('token');
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','Bearer '+this.token);

      this.http.get('http://localhost:55307/api/validate/listBus',{headers:headers})
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
    console.log('ionViewDidLoad ValidateBusPage');
  }
  viewBus(item){
  this.navCtrl.push(ValidateSpecificBusPage,{
    busId:item.busId,
    regId:item.registrationId,
    busName:item.busName,
    ownerId:item.ownerId,
    seats:item.seats,
    token:this.token
  });
}
}
