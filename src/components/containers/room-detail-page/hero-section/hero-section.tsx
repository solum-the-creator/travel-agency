import roomImage from '@public/images/room-bg.jpg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import styles from './hero-section.module.scss';

export const HeroSection: React.FC = () => {
  const t = useTranslations('RoomDetailsPage.HeroSection');

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image
          src={roomImage}
          alt={t('imageAlt')}
          fill={true}
          sizes="(max-width: 768px) 40vw, 100vw"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('title')}</h1>
      </div>
    </section>
  );
};
