import { Component, OnInit } from '@angular/core';
import { BillSplitterService } from '../bill-splitter.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  username: string = '';
  users: string[] = [];

  constructor(private billSplitterService: BillSplitterService) {}

  ngOnInit(): void {
    this.users = this.billSplitterService.getUsers();
  }

  addUser () {
    if (this.username.trim()) {
      this.billSplitterService.addUser (this.username.trim());
      this.username = '';
      this.users = this.billSplitterService.getUsers();
    }
  }
}