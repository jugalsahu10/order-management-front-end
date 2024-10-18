// src/app/place-order/place-order.component.ts
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
})
export class PlaceOrderComponent {
  @Input() userId: number = 1; // Accept userId as an input property
  orderForm: FormGroup;

  constructor(private fb: FormBuilder, private orderService: OrderService) {
    this.orderForm = this.fb.group({
      productId: [''],
      quantity: [''],
    });
  }

  onSubmit(): void {
    const orderData = [{ productId: this.orderForm.value.productId, quantity: this.orderForm.value.quantity }];
    this.orderService.placeOrder(this.userId, orderData).subscribe((response) => {
      console.log('Order placed successfully', response);
    });
  }
}
