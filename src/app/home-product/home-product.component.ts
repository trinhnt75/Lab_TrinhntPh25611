import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, inject } from "@angular/core";

@Component({
  selector: "app-home-product",
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: "./home-product.component.html",
  styleUrl: "./home-product.component.css",
})
export class HomeProductComponent {
  products: any;
  httpClient = inject(HttpClient);
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.httpClient
      .get("https://dummyjson.com/products")
      .subscribe((response: any) => {
        this.products = response.products;
      });
  }
}
