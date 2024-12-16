export type Room = {
  id: number;
  image: string;
  title: string;
  price: string;
  isAvailable: boolean;
};

export type RoomDetails = Room & {
  images: string[];
  rating: number;
  description: string;
};
