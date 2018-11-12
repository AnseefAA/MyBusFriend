import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { ValidateSpecificOwnerPage } from '../validate-specific-owner/validate-specific-owner';
/**
 * Generated class for the OwnerValidatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-owner-validate',
  templateUrl: 'owner-validate.html',
})
export class OwnerValidatePage {
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

      this.http.get('http://localhost:55307/api/validate/viewNonValidatedUser',{headers:headers})
      .map((res:Response)=>res.json())
    .subscribe(data=>{
    console.log(data);
      this.msg=data;
      this.count=data.count;
      for(let i=0;i<this.count;i++){
        this.items.push({
          text:this.msg.data[i].name,
          address:this.msg.data[i].houseName,
          id:this.msg.data[i].id,
          phoneNumber:this.msg.data[i].phoneNumber,
          email:this.msg.data[i].email,
          city:this.msg.data[i].city,
          street:this.msg.data[i].street

        });
      }    
    });  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OwnerValidatePage');
   
  }
  viewOwners(item){
    this.navCtrl.push(ValidateSpecificOwnerPage,{
            name:item.text,
            address:item.address,
            id:item.id,
            contact:item.phoneNumber,
            email:item.email,
            city:item.city,
            street:item.street,
            token:this.token


    });

  }
  

}
