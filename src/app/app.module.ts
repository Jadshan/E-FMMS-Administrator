import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewPostComponent } from './components/view-post/view-post.component'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../MaterialModule';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ProductsComponent } from './components/product/products/products.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    ViewPostComponent,
    AddPostComponent,
    ProductsComponent,
    ViewProductComponent,
    AddProductComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
