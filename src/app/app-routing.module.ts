import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProductListComponent } from 'src/app/pages/product-list/product-list.component';
import { ProductEditorComponent } from 'src/app/pages/product-editor/product-editor.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product-list/product/:id',
    component: ProductEditorComponent
  },
  {
    path: 'customer',
    component: CustomerListComponent
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
