import { Component, OnInit} from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],
})
export class FAQsPage implements OnInit {

  constructor(private router: Router) {}

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

}
