import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent implements OnInit{
 
  constructor() { }

  ngOnInit(): void {
    this.initializeStars();
  }

  initializeStars(): void {
    const stars: NodeListOf<HTMLElement> = document.querySelectorAll('.star');

    stars.forEach(star => {
      star.addEventListener('click', () => {
        const selectedValue = star.getAttribute('data-value');
        
        stars.forEach(s => {
          if (parseInt(s.getAttribute('data-value')!, 10) <= parseInt(selectedValue!, 10)) {
            s.classList.add('selected');
          } else {
            s.classList.remove('selected');
          }
         });
       });
     });
  }

}
