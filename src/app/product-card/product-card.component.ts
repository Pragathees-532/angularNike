import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,StarRatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  products =[
    { name: 'Product 1', price: 1500 },
    { name: 'Product 2', price: 1500 },
    { name: 'Product 3', price: 1500 }
  ];
}
