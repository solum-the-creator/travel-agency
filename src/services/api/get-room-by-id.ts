import { Room } from '@/types/rooms';

export const fetchRoomById = async <T extends Room>(id: string): Promise<T> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rooms/${id}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Room not found');
    } else {
      throw new Error('Failed to fetch room');
    }
  }

  return (await response.json()) as T;
};
