import roomsBgImage from '@public/images/hotel-rooms-bg.jpg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { BaseBlock } from '@/components/base-block/base-block';
import { RoomSnippetCard } from '@/components/room-snippet-card/room-snippet-card';
import { roomsSnippets } from '@/constants/rooms';

import styles from './rooms-section.module.scss';

export const RoomsSection: React.FC = () => {
  const t = useTranslations('HomePage.RoomsSection');

  const roomsCards = roomsSnippets.map(({ id, image, description, roomsCount }) => (
    <RoomSnippetCard key={id} image={image} description={description} roomsCount={roomsCount} />
  ));

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image
          src={roomsBgImage}
          alt={t('imageAlt')}
          fill={true}
          sizes="100vw"
          className={styles.image}
        />
      </div>
      <BaseBlock>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.line} />
            <p className={styles.text}>{t('subtitle')}</p>
          </div>
          <div className={styles.cards}>{roomsCards}</div>
        </div>
      </BaseBlock>
    </section>
  );
};
