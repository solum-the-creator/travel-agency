import { notFound } from 'next/navigation';

import { Room } from '@/types/rooms';

export const fetchRooms = async <T extends Room>(
  page: number = 1,
  limit: number = 10,
): Promise<T[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/rooms?page=${page}&limit=${limit}`,
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    } else {
      throw new Error('Failed to fetch rooms');
    }
  }

  const result = await response.json();
  return result.data as T[];
};
