import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProductListComponent } from 'src/app/pages/product-list/product-list.component';
import { ProductEditorComponent } from 'src/app/pages/product-editor/product-editor.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerEditorComponent } from './pages/customer-editor/customer-editor.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductListComponent
  },
  {
    path: 'product/product/:id',
    component: ProductEditorComponent
  },
  {
    path: 'customer',
    component: CustomerListComponent
  },
  {
    path: 'customer/customer/:id',
    component: CustomerEditorComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
