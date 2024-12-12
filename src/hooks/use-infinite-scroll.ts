import { useCallback, useEffect, useState } from 'react';

import { RoomCard } from '@/constants/rooms';

export const useInfiniteScroll = (data: RoomCard[], itemsPerPage: number, delay: number = 0) => {
  const [visibleData, setVisibleData] = useState<RoomCard[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setVisibleData(data.slice(0, itemsPerPage));
  }, [data, itemsPerPage]);

  const loadMore = useCallback(() => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setVisibleData((prev) => {
        const nextData = data.slice(prev.length, prev.length + itemsPerPage);
        if (nextData.length === 0) {
          setHasMore(false);
        }

        setIsLoading(false);
        return [...prev, ...nextData];
      });
    }, delay);
  }, [data, itemsPerPage, isLoading, delay]);

  return { visibleData, hasMore, isLoading, loadMore };
};
