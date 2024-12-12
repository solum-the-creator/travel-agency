'use client';

import { roomCards } from '@/constants/rooms';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { useOnScreen } from '@/hooks/use-on-screen';

import { Loader } from '../loader/loader';
import { RoomCard } from '../room-card/room-card';

import styles from './room-list.module.scss';

const itemsPerRow = 3;

export const RoomList: React.FC = () => {
  const { visibleData, loadMore, hasMore, isLoading } = useInfiniteScroll(
    roomCards,
    itemsPerRow,
    1000,
  );
  const observerRef = useOnScreen(loadMore, hasMore);

  return (
    <>
      <div className={styles.roomList}>
        {visibleData.map(({ id, image, title, isAvailable, price }) => (
          <RoomCard
            key={id}
            id={id}
            image={image}
            title={title}
            isAvailable={isAvailable}
            price={price}
          />
        ))}
      </div>
      {hasMore && (
        <div ref={observerRef} className={styles.loading}>
          {isLoading && <Loader />}
        </div>
      )}
    </>
  );
};
