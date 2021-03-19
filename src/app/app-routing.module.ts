import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProductListComponent } from 'src/app/pages/product-list/product-list.component';
import { ProductEditorComponent } from 'src/app/pages/product-editor/product-editor.component';

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
    component: ProductEditorComponent,
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
