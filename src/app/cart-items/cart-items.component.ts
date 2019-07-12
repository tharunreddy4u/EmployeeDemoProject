import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit, OnChanges {

  @Input() itemsList: any;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    console.log("cart value", this.itemsList);
  }
}
