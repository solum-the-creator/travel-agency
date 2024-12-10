import roomImage1 from '@public/images/room-1.jpg';
import roomImage2 from '@public/images/room-2.jpg';
import roomImage3 from '@public/images/room-3.jpg';

export type RoomSnippet = {
  id: number;
  image: string;
  description: string;
  roomsCount?: number;
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
