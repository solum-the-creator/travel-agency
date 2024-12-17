import { create } from 'zustand';

import { RoomType } from '@/types/rooms';

type BookingState = {
  currentLocation: string;
  roomType: RoomType;
  personCount: number;
  startDate: Date;
  endDate: Date;
};

type BookingActions = {
  setCurrentLocation: (location: string) => void;
  setRoomType: (type: RoomType) => void;
  setPersonCount: (count: number) => void;
  setDateRange: (start: Date, end: Date) => void;
};

export const useBookingStore = create<BookingState & BookingActions>((set) => ({
  currentLocation: 'BY',
  roomType: 'standard',
  personCount: 1,
  startDate: new Date(),
  endDate: new Date(),

  setCurrentLocation: (location) => set({ currentLocation: location }),
  setRoomType: (type) => set({ roomType: type }),
  setPersonCount: (count) => set({ personCount: count }),
  setDateRange: (start, end) => set({ startDate: start, endDate: end }),
}));
