import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { StaffProfilePage } from '../staff-profile/staff-profile';

/**
 * Generated class for the ChangeOwnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-owner',
  templateUrl: 'change-owner.html',
})
export class ChangeOwnerPage {
  public busName:any;
  public oldOwner:any;
  public newOwnerId:any;
  public newOwners:any;
  public items:any[];
  public token:any;
  public msg:NavParams;
  public msgbus:NavParams;
  public data:JSON;
  public count:number;
  public test:any;
  public newOwnerlist:any;
  public temp:any;
  public busIdToChang:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this .items=[];
    this.token=navParams.get('token');
    this.test="";
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','Bearer '+this.token);

      this.http.get('http://localhost:55307/api/validate/loadBusAndOwner',{headers:headers})
      .map((res:Response)=>res.json())
    .subscribe(data=>{
    console.log(data);
      this.msgbus=data;
      this.count=data.count;
      for(let i=0;i<this.count;i++){
        this.items.push({
          busName:this.msgbus.data[i].busName,
          ownerId:this.msgbus.data[i].ownerId,
          busId:this.msgbus.data[i].busId,
          registrationId:this.msgbus.data[i].registrationId,
         show:this.msgbus.data[i].busName+"  "+this.msgbus.data[i].registrationId,

        });
      }    
    }); 
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeOwnerPage');
  }
  setBusId(busName){
    this.newOwners=[];
    for(let i=0;i<this.count;i++){
      this.temp=this.msgbus.data[i].busName+"  "+this.msgbus.data[i].registrationId;
      if(busName==this.temp){
        this.busIdToChang=this.msgbus.data[i].busId;
        this.oldOwner=this.msgbus.data[i].ownerId; 
        console.log(this.busIdToChang+"  "+this.oldOwner) 
        break;      
      }
      }
    
      let headers=new Headers();
      headers.append('Content-Type','application/json');
      headers.append('Authorization','Bearer '+this.token);  
        this.http.get('http://localhost:55307/api/validate/loadAllOwner',{headers:headers})
        .map((res:Response)=>res.json())
      .subscribe(data=>{
      console.log(data);
        this.msg=data;
        this.count=data.count;
        for(let i=0;i<this.count;i++){
          if(this.oldOwner!=this.msg.data[i].id){
            this.newOwners.push({
              id:this.msg.data[i].id,
              name:this.msg.data[i].name,
              contact:this.msg.data[i].phoneNumber,
              show:"Id:"+this.msg.data[i].id+"Name  "+this.msg.data[i].name+"Mob:  "+this.msg.data[i].phoneNumber,
      
              });
          }         
        }    
      }); 
    
  }
  changeOwner(){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','Bearer '+this.token);  
    let body={
      busId:this.busIdToChang,
      oldOwnerId:this.oldOwner,
      newOwnerId:this.newOwnerId
    };
      this.http.post('http://localhost:55307/api/validate/changeOwner',JSON.stringify(body),{headers:headers})
      .map((res:Response)=>res.json())
    .subscribe(data=>{
    console.log(data);
    if(data.message=='Successful'){
      this.navCtrl.push(StaffProfilePage,{
        token:this.token
      })
    }
  });
  }
  setnewOwner(newOwner){
    this.newOwnerId=0;
    console.log(newOwner)
    for(let i=0;i<this.count;i++){
      this.temp="Id:"+this.msg.data[i].id+"Name  "+this.msg.data[i].name+"Mob:  "+this.msg.data[i].phoneNumber
     
      if(newOwner==this.temp){
        this.newOwnerId=this.msg.data[i].id;
        break;

      }      

    }   
    if(this.newOwnerId!=0){
      console.log(this.newOwnerId)
    } 
  }

}
