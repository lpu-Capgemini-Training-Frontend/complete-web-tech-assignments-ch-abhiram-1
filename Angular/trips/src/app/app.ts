import { Component, signal } from '@angular/core';
import { TripListComponent } from './trip-list/trip-list.component';

@Component({
  selector: 'app-root',
  imports: [TripListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('trips');
}
