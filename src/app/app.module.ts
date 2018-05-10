import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BasketComponent } from './basket/basket.component';
import { OrderComponent } from './order/order.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BasketButtonComponent } from './basket-button/basket-button.component';
import { JumboTronComponent } from './jumbo-tron/jumbo-tron.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BasketComponent,
    OrderComponent,
    ProductDescriptionComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ProductListItemComponent,
    PaginationComponent,
    BasketButtonComponent,
    JumboTronComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
