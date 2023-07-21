import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  backToHome(){
    this.router.navigate(['/home'])
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Schedule a Date',
      message: 'Please Login or Sign Up to Continue',
      buttons: ['OK'],
    });

    await alert.present();

    this.router.navigate(['/login'])
  }

}
