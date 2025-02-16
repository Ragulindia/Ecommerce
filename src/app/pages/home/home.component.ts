import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  clothingItems = [
    {
      name: 'Red Shirt',
      description: 'A comfortable red shirt perfect for casual outings.',
      originalPrice: 40,
      discountedPrice: 30,
      rating: 4,
      imageUrl: '/assets/img11.avif',
    },
    {
      name: 'Blue Jeans',
      description: 'Stylish blue jeans that match every occasion.',
      originalPrice: 50,
      discountedPrice: 40,
      rating: 5,
      imageUrl: '/assets/img11.avif',
    },
    {
      name: 'Sneakers',
      description: 'Comfortable sneakers for everyday wear.',
      originalPrice: 60,
      discountedPrice: 45,
      rating: 4,
      imageUrl: '/assets/img11.avif',
    },
    {
      name: 'Jacket',
      description: 'A stylish jacket for colder weather.',
      originalPrice: 80,
      discountedPrice: 60,
      rating: 3,
      imageUrl: '/assets/img11.avif',
    }
  ];

}
