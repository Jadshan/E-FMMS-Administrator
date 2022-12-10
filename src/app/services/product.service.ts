import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { post } from '../models/post.model';
import { updatePost } from '../models/update-post.model';
import { product } from '../models/product-model/product.model';
import { updateProduct } from '../models/product-model/update-product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  apiBaseUrl = environment.apiBaseUrl;

  getAllProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.apiBaseUrl + 'api/Product');
  }

  getProductById(id: string): Observable<product> {
    return this.http.get<product>(this.apiBaseUrl + 'api/Product/' + id);
  }

  updateProductById(
    id: string | undefined,
    updateProduct: updateProduct
  ): Observable<product> {
    return this.http.put<product>(this.apiBaseUrl + 'api/Product/' + id, updateProduct);
  }

  addNewProduct(addProductRequest: updateProduct): Observable<product> {
   return this.http.post<product>(this.apiBaseUrl + 'api/Product', addProductRequest);
  }

  deleteProduct(id: string | undefined): Observable<product> {
   return this.http.delete<product>(this.apiBaseUrl + 'api/Product/' + id);
  }
}
