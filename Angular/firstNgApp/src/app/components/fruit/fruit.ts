import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-fruit',
  imports: [FormsModule, CommonModule],
  templateUrl: './fruit.html',
  styleUrl: './fruit.css',
})
export class Fruit {
  fruitName: string = '';
  fruits = signal<string[]>([]);

  addFruit() {
    if (this.fruitName.trim()) {
      this.fruits.set([...this.fruits(), this.fruitName]);
      this.fruitName = '';
    }
  }
}
