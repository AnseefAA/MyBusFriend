import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogInPage } from '../log-in/log-in';
import { SearchPage } from '../search/search';
import { UserRegistrationPage } from '../user-registration/user-registration';
import {Http,Headers} from '@angular/http'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any[];

  constructor(public navCtrl: NavController,public http:Http) {
    // itratively insert in to a item not used in my project but for reference
    this.items=[];
    for(let i=0;i<10;i++)
    {
      this.items.push({
        text:'item '+i,
        id:i
       });
    }

  }

userRegister(){
  this.navCtrl.push(UserRegistrationPage);
}
userLogin(){
  this.navCtrl.push(LogInPage);
}
busSearch(){
  this.navCtrl.push(SearchPage);
}
reference(){
  //  <button ion-button block icon-end (click)="reference()">Test</button>

  let headers=new Headers();
  headers.append('Content-Type','application/json');

  let body={
    userName:"anseefikka@gmail.com",
    password:"Abcd@1"
  };

  this.http.post('http://localhost:55307/api/user/login',JSON.stringify(body),{headers:headers})
  .subscribe(data=>{
  console.log(data);
  });
}
}
