import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  backToHome(){
    this.router.navigate(['/home'])
  }

  loggedIn(){
    this.router.navigate(['/schedule'])
  }

  signMeUp(){
    this.router.navigate(['/signup'])
  }

  public alertButtonsOK = ['OK'];

  public alertEmailInput = [
    {
      label: "Email input",
      type: "email",
      placeholder: "email@domain.com",
    },
  ];

}
