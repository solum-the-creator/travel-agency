import roomImage1 from '@public/images/room-1.jpg';
import roomImage2 from '@public/images/room-2.jpg';
import roomImage3 from '@public/images/room-3.jpg';

export type RoomSnippet = {
  id: number;
  image: string;
  description: string;
  roomsCount?: number;
};

export type RoomCard = {
  id: number;
  image: string;
  title: string;
  isAvailable: boolean;
  price: string;
};

export const roomsSnippets: RoomSnippet[] = [
  {
    id: 1,
    image: roomImage1.src,
    description: 'Television set, Extra sheets and Breakfast',
    roomsCount: 2,
  },
  {
    id: 2,
    image: roomImage2.src,
    description: 'Television set, Extra sheets, Breakfast, and fireplace',
    roomsCount: 4,
  },
  {
    id: 3,
    image: roomImage3.src,
    description: 'Television set, Extra sheets, Breakfast, and fireplace, Console and bed rest',
    roomsCount: 8,
  },
];

export const roomCards: RoomCard[] = [
  {
    id: 1,
    image: roomImage1.src,
    title: 'Single Room',
    isAvailable: true,
    price: '100,000',
  },
  {
    id: 2,
    image: roomImage2.src,
    title: 'Double Room',
    isAvailable: true,
    price: '150,000',
  },
  {
    id: 3,
    image: roomImage3.src,
    title: 'Family Room',
    isAvailable: false,
    price: '200,000',
  },
  {
    id: 4,
    image: roomImage1.src,
    title: 'Single Room',
    isAvailable: true,
    price: '100,000',
  },
  {
    id: 5,
    image: roomImage2.src,
    title: 'Double Room',
    isAvailable: true,
    price: '150,000',
  },
  {
    id: 6,
    image: roomImage3.src,
    title: 'Family Room',
    isAvailable: false,
    price: '200,000',
  },
  {
    id: 7,
    image: roomImage1.src,
    title: 'Single Room',
    isAvailable: true,
    price: '100,000',
  },
  {
    id: 8,
    image: roomImage2.src,
    title: 'Double Room',
    isAvailable: true,
    price: '150,000',
  },
  {
    id: 9,
    image: roomImage3.src,
    title: 'Family Room',
    isAvailable: false,
    price: '200,000',
  },
];
