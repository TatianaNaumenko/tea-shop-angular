import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/pages/main/main.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { CreateOrderComponent } from './components/pages/create-order/create-order.component';
import { TeaDetailsComponent } from './components/pages/tea-details/tea-details.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'catalog', component:CatalogComponent},
  {path:'order', component:CreateOrderComponent},
  {path:'tea-details/:id', component: TeaDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
