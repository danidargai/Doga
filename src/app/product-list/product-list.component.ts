import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
modelName: any;
valami: any;
cancelProduct(arg0: any) {
throw new Error('Method not implemented.');
}
saveProduct(arg0: any) {
throw new Error('Method not implemented.');
}
addProduct(arg0: any) {
throw new Error('Method not implemented.');
}
updateProduct(arg0: any) {
throw new Error('Method not implemented.');
}
newProduct: any;
editProduct(arg0: any) {
throw new Error('Method not implemented.');
}
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = Object.values(data);
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }
}
