import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

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
    this.router.navigate(['/products'])
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
