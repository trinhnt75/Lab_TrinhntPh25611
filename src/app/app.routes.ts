import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { LoginComponent } from "./admin/login/login.component";
export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "product-detail/:id", component: ProductDetailComponent },
  {path: 'login', component: LoginComponent}
];
