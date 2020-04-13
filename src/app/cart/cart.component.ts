import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products = products;
  items;
  constructor(
    private prodSer: ProductService
  ) {}

  ngOnInit() {
    this.items = this.prodSer.getItems();
  }

}
