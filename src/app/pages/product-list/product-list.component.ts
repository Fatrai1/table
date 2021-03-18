import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.productList$;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll();
  }

  deleteItem(product: Product): void {
    this.productService.remove(product).subscribe(
      () => location.reload()
    );
  }
}
