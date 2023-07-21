import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {
  }

  backToHome(){
    this.router.navigate(['/home'])
  }

  logMeIn(){
    this.router.navigate(['/login'])
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Account Created',
      message: 'You have successfully created an Account',
      buttons: ['OK'],
    });

    await alert.present();

    this.router.navigate(['/login'])
  }

}

