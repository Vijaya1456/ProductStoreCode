import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const routes: Routes = [
   { path: '', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'products/edit/:id', component: EditProductComponent }

];
