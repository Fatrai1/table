import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/model/address';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  direction: boolean = true;
  key: number | string = '';
  columnKey: string = '';
  
  filterKey: string = 'name';
  filterKeys: string[] = Object.keys(new Customer());
  phrase: string = '';

  // filterKeys: string[] = (Object.keys(new Customer()).concat(Object.keys(new Address()))).filter(item => !item.includes("address")).filter(item => !item.includes("notes"));

  customerList$: Observable<Customer[]> = this.customerService.getAll();

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAll();
  }

  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.direction = !this.direction;
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  deleteItem(customer: Customer): void {
    if(!window.confirm("Biztosan törölni akrja?")) {
      return;
    }
    this.customerService.remove(customer).subscribe(
      () => location.reload()
    );
  }
}
