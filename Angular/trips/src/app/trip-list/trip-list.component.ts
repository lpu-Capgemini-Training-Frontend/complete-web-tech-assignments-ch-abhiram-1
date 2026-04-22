import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripService, Trip } from '../trip.service';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-list.component.html',
  styleUrl: './trip-list.component.css'
})
export class TripListComponent implements OnInit {
  trips = signal<Trip[]>([]);
  selectedTripId = signal<number | null>(null);

  constructor(private tripService: TripService) {}

  ngOnInit() {
    this.trips.set(this.tripService.getTrips());
  }

  // Truncate text to show only first 80 characters
  truncateText(text: string, length: number = 80): string {
    if (text.length > length) {
      return text.substring(0, length) + '...';
    }
    return text;
  }

  // Select a trip to view details
  viewDetails(tripId: number) {
    this.selectedTripId.set(tripId);
  }

  // Get selected trip
  getSelectedTrip(): Trip | undefined {
    const id = this.selectedTripId();
    return id ? this.tripService.getTripById(id) : undefined;
  }

  // Go back to list view
  goBack() {
    this.selectedTripId.set(null);
  }
}
