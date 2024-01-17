import { Component } from '@angular/core';
import { HomeProductComponent } from '../home-product/home-product.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
