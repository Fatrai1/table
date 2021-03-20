import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();
  phrase: string = '';
  columnKey: string = '';

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

  deleteItem(product: Product): void {
    if (!window.confirm("Biztosan törölni akarja?")) {
      return;
    }
    this.productService.remove(product).subscribe(
      () => location.reload()
    );
  }
}
