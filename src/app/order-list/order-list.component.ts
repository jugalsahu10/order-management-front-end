import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnChanges {
  @Input() userId: number = 1; // Input property to receive the user ID
  orders: any[] = [];  // Array to hold the orders
  isLoading: boolean = true; // Loading state

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  ngOnChanges(): void {
    this.loadOrders(); // Reload orders whenever the user ID changes
  }

  loadOrders(): void {
    this.orderService.getUserOrders(this.userId) // Replace 1 with the desired user ID
      .subscribe(
        (data) => {
          this.orders = data;
          this.isLoading = false; // Set loading state to false once data is loaded
        },
        (error) => {
          console.error('Error fetching orders', error);
          this.isLoading = false; // Ensure loading state is false on error
        }
      );
  }
}
