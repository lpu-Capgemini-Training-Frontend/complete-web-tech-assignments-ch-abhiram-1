import { Injectable } from '@angular/core';

export interface Trip {
  id: number;
  name: string;
  itinerary: string;
}

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private trips: Trip[] = [
    {
      id: 1,
      name: 'Paris Adventure',
      itinerary: 'Day 1: Arrive in Paris, visit Eiffel Tower. Day 2: Louvre Museum, Seine river cruise. Day 3: Versailles Palace, Notre-Dame Cathedral. Day 4: Montmartre, Sacré-Cœur Basilica. Day 5: Shopping at Champs-Élysées, return home.'
    },
    {
      id: 2,
      name: 'Tokyo Experience',
      itinerary: 'Day 1: Land at Narita, check-in hotel. Day 2: Visit Senso-ji Temple, Shibuya Crossing. Day 3: Tokyo Tower, shopping in Shinjuku. Day 4: Day trip to Mount Fuji, Hakone. Day 5: Tsukiji Market, Meiji Shrine. Day 6: Last-minute shopping.'
    },
    {
      id: 3,
      name: 'New York City',
      itinerary: 'Day 1: Arrive, explore Times Square. Day 2: Statue of Liberty, Ellis Island. Day 3: Central Park, Museum of Natural History. Day 4: Broadway show, shopping in SoHo. Day 5: Brooklyn Bridge, visit galleries. Day 6: Empire State Building, rooftop bars.'
    },
    {
      id: 4,
      name: 'Rome Holiday',
      itinerary: 'Day 1: Arrival and relaxation. Day 2: Colosseum, Roman Forum. Day 3: Vatican City, St. Peters Basilica. Day 4: Trevi Fountain, Pantheon. Day 5: Spanish Steps, Villa Borghese. Day 6: Day trip to Pompeii. Day 7: Departure.'
    }
  ];

  getTrips(): Trip[] {
    return this.trips;
  }

  getTripById(id: number): Trip | undefined {
    return this.trips.find(trip => trip.id === id);
  }
}
