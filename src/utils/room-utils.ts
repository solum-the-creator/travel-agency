import { Room, rooms } from '@/constants/rooms';

export const getRoomById = (id: number): Room | undefined => {
  return rooms.find((room) => room.id === id);
};
