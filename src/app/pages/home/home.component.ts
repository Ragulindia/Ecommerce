import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  offset = 0;
  cardWidth = 270; // This should be the card width + margin-right (15px)
  isDragging = false; // Flag to track whether dragging is active
  startX: number = 0; // Store the starting position of the drag
  startOffset: number = 0; // Store the offset at the start of the drag


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

  products = [
    { name: 'Euphoria Crop Blouse', description: 'Description of product 1', price: '1296.000', imageUrl: '/assets/Ec-img3.png' },
    { name: 'Venus Halter Dress', description: 'Description of product 2', price: '180.000', imageUrl: 'assets/Ec-img2.png' },
    { name: 'Snap Pure Blose', description: 'Description of product 3', price: '170.000', imageUrl: 'assets/Ec-img1.png' },
    { name: 'Euphoria Crop Blouse', description: 'Description of product 4', price: '1296.000', imageUrl: 'assets/Ec-img3.png' },
    { name: 'Venus Halter Dress', description: 'Description of product 5', price: '180.000', imageUrl: 'assets/Ec-img2.png' }

  ];

  dress=[
    {link:'/assets/ec-img12.png'},
    {link:'/assets/ec-img13.png'},
    {link:'/assets/ec-img14.png'},
    {link:'/assets/ec-img15.png'}
  ]
// Start dragging
startDrag(event: MouseEvent) {
  this.isDragging = true;
  this.startX = event.clientX;
  this.startOffset = this.offset;
  document.body.style.cursor = 'grabbing'; // Change the cursor to grabbing
}

// Handle dragging
onDrag(event: MouseEvent) {
  if (!this.isDragging) return;

  const deltaX = event.clientX - this.startX;
  this.offset = this.startOffset + deltaX;

  // Apply transform to move the product container horizontally
  const container = document.querySelector('.product-container') as HTMLElement;
  container.style.transform = `translateX(${this.offset}px)`;

  // Optional: Add boundaries to prevent overscrolling
  const maxOffset = -(this.products.length - 3) * this.cardWidth; // 3 items visible at once
  if (this.offset > 0) {
    this.offset = 0; // Prevent moving too far right
  } else if (this.offset < maxOffset) {
    this.offset = maxOffset; // Prevent moving too far left
  }
}

// End dragging
endDrag() {
  this.isDragging = false;
  document.body.style.cursor = 'grab'; // Change the cursor back to grab
}
}
