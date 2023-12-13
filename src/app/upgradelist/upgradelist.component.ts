import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upgradelist',
  templateUrl: './upgradelist.component.html',
  styleUrls: ['./upgradelist.component.css']
})
export class UpgradelistComponent implements OnInit {
  products = [];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.products$.subscribe((value) => {
      this.products = value;
      console.log("PRODUCTS", value);
    });
  }
 ngOnInit(): void {
  this.products = this.productService.getCurrentValue();
 }


}
