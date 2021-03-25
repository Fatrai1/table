import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Customer } from 'src/app/model/customer';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();
  columnKey: string = '';
  selectedProductToDelete: Product = new Product();
  
  filterKeys: string[] = Object.keys(new Product());
  filterKey: string = 'name';
  phrase: string = '';

  constructor(private productService: ProductService,) { }

  ngOnInit(): void {
    this.productService.getAll();
  }

  onColumnSelect(key: string): void {
    this.columnKey = key;    
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  setToDelete(product: Product): void {
    this.selectedProductToDelete = product;
  }
  deleteItem(): void {

    this.productService.remove(this.selectedProductToDelete).subscribe(
      () => {
        this.productList$ = this.productService.getAll();
      }
    );
  }
}
