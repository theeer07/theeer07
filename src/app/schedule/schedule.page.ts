import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {
  }

  backToHome(){
    this.router.navigate(['/home'])
  }

  schedule(){
    this.router.navigate(['/schedule'])
  }

  products(){
    this.router.navigate(['/items'])
  }

  contacts(){
    this.router.navigate(['/contacts'])
  }

  faqs(){
    this.router.navigate(['/faqs'])
  }

  profile(){
    this.router.navigate(['/profile'])
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Date Scheduled',
      message: 'Thank you for trusting us! Please keep on the line for us to keep in touch.',
      buttons: ['OK'],
    });

    await alert.present();

    this.router.navigate(['/schedule'])
  }

}
