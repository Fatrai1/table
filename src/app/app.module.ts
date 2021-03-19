import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { ProductEditorComponent } from './pages/product-editor/product-editor.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterUpDownPipe } from './pipe/sorter-up-down.pipe';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    NavigationComponent,
    ProductEditorComponent,
    SorterPipe,
    FilterPipe,
    SorterUpDownPipe,
    CustomerListComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' //set default here
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
