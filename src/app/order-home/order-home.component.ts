import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Import UserService
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-home',
  templateUrl: './order-home.component.html',
  styleUrls: ['./order-home.component.css']
})
export class OrderHomeComponent implements OnInit {
  users: any[] = [];
  selectedUserId: number = 1; // Default to the first user

  constructor(private userService: UserService, private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      if (this.users.length > 0) {
        this.selectedUserId = this.users[0].id; // Set default user ID
      }
    });
  }

  onUserChange(userId: number): void {
    this.selectedUserId = userId; // Update selected user ID
  }
}
