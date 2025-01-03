import { Component, OnInit } from '@angular/core';
import { BillSplitterService } from '../bill-splitter.service';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.css']
})
export class ItemInputComponent implements OnInit {
  itemName: string = '';
  itemQuantity: number = 1;
  itemPrice: number = 0;
  items: any[] = [];

  constructor(private billSplitterService: BillSplitterService) {}

  ngOnInit(): void {
    this.items = this.billSplitterService.getItems();
  }

  addItem() {
    if (this.itemName.trim() && this.itemQuantity > 0 && this.itemPrice > 0) {
      this.billSplitterService.addItem({
        name: this.itemName,
        quantity: this.itemQuantity,
        price: this.itemPrice
      });
      this.itemName = '';
      this.itemQuantity = 1;
      this.itemPrice = 0;
      this.items = this.billSplitterService.getItems();
    }
  }
}