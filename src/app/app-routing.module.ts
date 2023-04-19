import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Components/product/product.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ProductCategoryComponent } from './Components/product-category/product-category.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminviewComponent } from './Components/adminview/adminview.component';
import { CreateComponent } from './Components/createProduct/createProduct.component';
import { EditComponent } from './Components/editProduct/edit.component';
import { EdituserComponent } from './Components/edituser/edituser.component';
import { EditreviewComponent } from './Components/editreview/editreview.component';
import { EditdealsComponent } from './Components/editdeals/editdeals.component';
import { CreatedealsComponent } from './Components/createdeals/createdeals.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { EditProductCategoryComponent } from './Components/edit-product-category/edit-product-category.component';
import { CreateProductCategoryComponent } from './Components/create-product-category/create-product-category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'shopping-cart/payment', component: PaymentComponent },
  { path: 'product-category', component: ProductCategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminview', component: AdminviewComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'edituser/:id', component: EdituserComponent },
  { path: 'editreview/:id', component: EditreviewComponent },
  { path: 'editdeals/:id', component: EditdealsComponent },
  { path: 'createdeal', component: CreatedealsComponent },
  { path: 'editproduct_category/:id', component: EditProductCategoryComponent },
  { path: 'createproduct_category', component: CreateProductCategoryComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
