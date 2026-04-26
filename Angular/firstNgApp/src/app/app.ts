import { Component, signal } from '@angular/core';
import { Fruit } from './components/fruit/fruit';

@Component({
  selector: 'app-root',
  imports: [Fruit],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstNgApp');
}
