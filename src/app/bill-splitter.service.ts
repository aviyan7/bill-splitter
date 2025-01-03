import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillSplitterService {
  private users: string[] = [];
  private items: { name: string; quantity: number; price: number; total: number; people: string[] }[] = [];

  constructor() {}

  // Get the list of users
  getUsers(): string[] {
    return this.users;
  }

  // Add a user to the list
  addUser (user: string): void {
    if (!this.users.includes(user)) {
      this.users.push(user);
    }
  }

  // Get the list of items
  getItems() {
    return this.items;
  }

  // Add an item to the list
  addItem(item: { name: string; quantity: number; price: number }): void {
    const total = item.quantity * item.price;
    this.items.push({ ...item, total, people: [] });
  }

  // Calculate total amount for all items
  calculateTotal(): number {
    return this.items.reduce((sum, item) => sum + item.total, 0);
  }
}