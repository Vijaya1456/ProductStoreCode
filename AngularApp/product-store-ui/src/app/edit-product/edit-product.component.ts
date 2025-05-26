import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent implements OnInit {
  form!: FormGroup;
  productId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.form = this.fb.group({
      name: [''],
      price: [0]
    });

    this.productService.getProducts().subscribe(products => {
      const product = products.find(p => p.id === this.productId);
      if (product) {
        this.form.patchValue(product);
      }
    });
  }

  onSubmit(): void {
    this.productService.updateProduct(this.productId, this.form.value)
      .subscribe(() => {
        alert('Product updated successfully');
        this.router.navigate(['/products']);
      });
  }

  cancelEdit(): void {
    this.router.navigate(['/products']);
  }
}
