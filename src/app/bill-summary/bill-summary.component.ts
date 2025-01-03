import { Component, OnInit } from '@angular/core';
import { BillSplitterService } from '../bill-splitter.service';

@Component({
  selector: 'app-bill-summary',
  templateUrl: './bill-summary.component.html',
  styleUrls: ['./bill-summary.component.css']
})
export class BillSummaryComponent implements OnInit {
  totalAmount: number = 0;
  items: any[] = [];

  constructor(private billSplitterService: BillSplitterService) {}

  ngOnInit(): void {
    this.items = this.billSplitterService.getItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = this.items.reduce(( sum, item) => sum + (item.quantity * item.price), 0);
  }
}