// src/app/add-product/add-product.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: [''],
      price: [0],
      quantity: [0],
    });
  }

  onSubmit(): void {
    this.productService.addProduct(this.productForm.value).subscribe((response) => {
      console.log('Product added successfully', response);
    });
  }
}
