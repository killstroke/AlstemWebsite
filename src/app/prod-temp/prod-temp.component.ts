import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prod-temp',
  templateUrl: './prod-temp.component.html',
  styleUrls: ['./prod-temp.component.css']
})
export class ProdTempComponent implements OnInit {
  title = 'ips kit';

  constructor(
    private productSer: ProductService
  ) {}

  addToCart() {
    for (let i = 0; i < products.length; i++) {
      if (products[i].name === this.title) {
      this.productSer.addToCart(products[i]);
      }
    };
    window.alert('It has added to cart');
  }

  ngOnInit() {
  }

}
