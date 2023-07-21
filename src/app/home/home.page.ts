import { Component } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  getStarted(){
    this.router.navigate(['/schedule'])
  }

  signMeUp(){
    this.router.navigate(['/signup'])
  }

  logMeIn(){
    this.router.navigate(['/login'])
  }

  bookAppointment(){
    this.router.navigate(['/book'])
  }

}
