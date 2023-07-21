import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router) { }

  public alertButtons = ['Save'];
  public okButtons = ['OK'];

  isAlertOpen = false;
  ToUisAlertOpen = false;

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  ToUsetOpen(isOpen: boolean) {
    this.ToUisAlertOpen = isOpen;
  }

  public editProfileInput = [
    {
      placeholder: 'Jesstherhard Borja',
    },
    {
      placeholder: 'jesstherborja07@gmail.com',
    },
    {
      type: "date",
      placeholder: '04/07/2002',
    },
    {
      placeholder: 'Male',
    },
  ];

  public changePassInput = [
    {
      placeholder: 'Enter Current Password',
    },
    {
      placeholder: 'Enter New Password',
    },
    {
      placeholder: 'Re-enter New Password',
    },
  ];

  public changeUserNameInput = [
    {
      placeholder: 'Enter New Username',
    },
    {
      placeholder: 'Enter Password',
    },
  ];

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/home'])
  }

  schedule() {
    this.router.navigate(['/schedule'])
  }

  products() {
    this.router.navigate(['/items'])
  }

  contacts() {
    this.router.navigate(['/contacts'])
  }

  faqs() {
    this.router.navigate(['/faqs'])
  }

  profile() {
    this.router.navigate(['/profile'])
  }

}