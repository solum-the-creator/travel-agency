import { BaseBlock } from '@/components/base-block/base-block';
import { RoomList } from '@/components/room-list/room-list';

import styles from './rooms-section.module.scss';

export const RoomsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <BaseBlock>
        <RoomList />
      </BaseBlock>
    </section>
  );
};
