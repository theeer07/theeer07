import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  constructor(private router: Router) { }

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

  ngOnInit() {
  }

}
