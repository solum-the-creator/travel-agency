import { useCallback, useState } from 'react';

import { fetchRooms } from '@/services/api/get-rooms';
import { Room } from '@/types/rooms';

export const useInfiniteScroll = (itemsPerPage: number, delay: number = 0) => {
  const [page, setPage] = useState(1);
  const [visibleData, setVisibleData] = useState<Room[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = useCallback(async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      if (page !== 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      const newData = await fetchRooms<Room>(page, itemsPerPage);
      setVisibleData((prev) => [...prev, ...newData]);

      if (newData.length < itemsPerPage) {
        setHasMore(false);
      }
    } catch {
      setHasMore(false);
    } finally {
      setPage((prev) => prev + 1);
      setIsLoading(false);
    }
  }, [itemsPerPage, isLoading, page, delay]);

  return { visibleData, hasMore, isLoading, loadMore };
};
