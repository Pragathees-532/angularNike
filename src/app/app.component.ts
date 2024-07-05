import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,CarouselComponent,HeaderComponent,
    ProductCardComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nike';
  carouselItems = [
    {
      image: '',
      title: 'Slide 1',
      description: 'Description for slide 1'
    },
    {
      image: '',
      title: 'Slide 2',
      description: 'Description for slide 2'
    },
    {
      image: '',
      title: 'Slide 3',
      description: 'Description for slide 3'
    }
  ];
 
}
