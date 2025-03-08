import { TaaSearchService } from './services/taa-search.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { TeaCardComponent } from './components/common/tea-card/tea-card.component';
import { MainComponent } from './components/pages/main/main.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { CreateOrderComponent } from './components/pages/create-order/create-order.component';
import { TeaDetailsComponent } from './components/pages/tea-details/tea-details.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './components/common/popup/popup.component';
import { LoaderComponent } from './components/common/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TeaCatalogService } from './services/tea-catalog.service';
import { TeaDataService } from './services/tea-data.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TeaCardComponent,
    MainComponent,
    CatalogComponent,
    CreateOrderComponent,
    TeaDetailsComponent,
    PopupComponent,
    LoaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TeaCatalogService,
    TeaDataService,
    TaaSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
