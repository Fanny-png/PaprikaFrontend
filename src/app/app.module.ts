import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PInfoComponent } from './Components/p-info/p-info.component';
import { NyheterComponent } from './Components/nyheter/nyheter.component';
import { ReviewComponent } from './Components/review/review.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Components/product/product.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ProductCategoryComponent } from './Components/product-category/product-category.component';
import { NavComponent } from './Components/nav/nav.component';
import { WeeklyDealsComponent } from './Components/DiscountProducts/discountProducts.component';
import { HomeBigPictureComponent } from './Components/home-big-picture/home-big-picture.component';
import { AdminviewComponent } from './Components/adminview/adminview.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoginComponent } from './Components/login/login.component';
import { CreateComponent } from './Components/createProduct/createProduct.component';
import { EditComponent } from './Components/editProduct/edit.component';

//Add bootstrap
import { Ng2SearchPipeModule } from 'ng2-search-filter';


//Add angular material
import { CommonModule } from '@angular/common';
// Material Form Controls
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { EdituserComponent } from './Components/edituser/edituser.component';
import { EditreviewComponent } from './Components/editreview/editreview.component';
import { EditdealsComponent } from './Components/editdeals/editdeals.component';
import { CreatedealsComponent } from './Components/createdeals/createdeals.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { EditProductCategoryComponent } from './Components/edit-product-category/edit-product-category.component';
import { CreateProductCategoryComponent } from './Components/create-product-category/create-product-category.component';
import { SearchPipe } from './Components/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PInfoComponent,
    NyheterComponent,
    ReviewComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent,
    PaymentComponent,
    ProductCategoryComponent,
    NavComponent,
    WeeklyDealsComponent,
    HomeBigPictureComponent,
    LoginComponent,
    AdminviewComponent,
    CreateComponent,
    EditComponent,
    EdituserComponent,
    EditreviewComponent,
    EditdealsComponent,
    CreatedealsComponent,
    ProductListComponent,
    EditProductCategoryComponent,
    CreateProductCategoryComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    OAuthModule.forRoot(),
    MatSlideToggleModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
   

    //Add angular material
    CommonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
