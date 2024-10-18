import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserHomeComponent } from './user-home/user-home.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { OrderHomeComponent } from './order-home/order-home.component';
import { UserListComponent } from './user-home/user-list/user-list.component';
import { AddUserComponent } from './user-home/add-user/add-user.component';
import { ProductListComponent } from './product-home/product-list/product-list.component';
import { AddProductComponent } from './product-home/add-product/add-product.component';
import { OrderListComponent } from './order-home/order-list/order-list.component';
import { PlaceOrderComponent } from './order-home/place-order/place-order.component';


@NgModule({
  declarations: [
  AppComponent,
    UserHomeComponent,
       UserListComponent,
       AddUserComponent,
       ProductHomeComponent,
       ProductListComponent,
       AddProductComponent,
       OrderHomeComponent,
       OrderListComponent,
       PlaceOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
