import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from '../../../models/product-model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) {}

  products: product[] = [];
  post: product | undefined;

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  }

  onDeletePost(Id: string) {
    this.productService.deleteProduct(Id).subscribe((res) => {
      alert('deleted successfully');
    });
  }
}
