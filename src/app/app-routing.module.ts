import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { OrderHomeComponent } from './order-home/order-home.component';

const routes: Routes = [
  { path: '', component: UserHomeComponent },
  { path: 'users', component: UserHomeComponent },
  { path: 'products', component: ProductHomeComponent },
  { path: 'orders', component: OrderHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
