import Image from 'next/image';
import { useTranslations } from 'next-intl';

import styles from './room-snippet-card.module.scss';

type RoomSnippetCardProps = {
  image: string;
  description: string;
  roomsCount?: number;
};

export const RoomSnippetCard: React.FC<RoomSnippetCardProps> = ({
  image,
  description,
  roomsCount,
}) => {
  const t = useTranslations('Common');

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={image} className={styles.image} alt="Room" width={330} height={285} />
        <span className={styles.roomsCount}>{t('roomsAvailable', { roomsCount })}</span>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
