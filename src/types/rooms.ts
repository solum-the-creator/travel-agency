export type Room = {
  id: number;
  image: string;
  title: string;
  price: string;
  isAvailable: boolean;
};

export type RoomType = 'standard' | 'royal';

export type RoomDetails = Room & {
  images: string[];
  rating: number;
  description: string;
  location: string;
  personCount: number;
  type: RoomType;
};
