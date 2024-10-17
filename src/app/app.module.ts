import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrderHomeComponent } from './order-home/order-home.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { TestComponent } from './test/test.component';


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
       TestComponent,
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
