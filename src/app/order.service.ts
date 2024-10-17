// src/app/order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) {}

  // Get specific order by ID
  getOrder(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Get orders by user ID
  getUserOrders(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }

  // Place a new order
  placeOrder(userId: number, products: any[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/place?userId=${userId}`, products);
  }
}
