import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() allProducts: IProduct[] = [];

  constructor() {}

  ngOnInit(): void {}

  public isNotEmpty() {
    return Object.keys(this.allProducts).length > 0;
  }

  public displayProducts() {
    return this.allProducts;
  }
}
