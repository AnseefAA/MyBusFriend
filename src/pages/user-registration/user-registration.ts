import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import { RegistrationTwoPage } from '../registration-two/registration-two';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the UserRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-registration',
  templateUrl: 'user-registration.html',
})
export class UserRegistrationPage {
  
  //formgroup:FormGroup;
 // name:AbstractControl;
 // email:AbstractControl;
 // password:AbstractControl;
 //usertype:number;
 public reg_name:any;
 public reg_email:any;
public reg_password:any;
public reg_usertype:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRegistrationPage');
  }

  goToNext(){

  if(!this.reg_name){
    
      const toast = this.toastCtrl.create({
        message: 'Name is mandatory',
        duration: 3000
      });
      toast.present();
  
  }
  else if(!this.reg_email){
    const toast = this.toastCtrl.create({
      message: 'email is mandatory',
      duration: 3000,
    });
    //toast.setPosition('top');
    toast.present();
    
  }
  else if(!this.reg_password){
   
    const toast = this.toastCtrl.create({
      message: 'password is mandatory',
      duration: 3000
    });
    toast.present();
  }
  else{
    
    this.navCtrl.push(RegistrationTwoPage,{      
      name:this.reg_name,
      email:this.reg_email,
      password:this.reg_password,
      usertype:this.reg_usertype
    });
  }
    
    
  }
  monthfilter(reg_usertype) {
    this.reg_usertype=reg_usertype
  }


}
