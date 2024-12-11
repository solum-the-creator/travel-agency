'use client';

import roomImage from '@public/images/room-bg.jpg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useScrollToNextSection } from '@/hooks/use-scroll-to-next-section';

import { ScrollDownButton } from './scroll-down-button/scroll-down-button';

import styles from './hero-section.module.scss';

export const HeroSection: React.FC = () => {
  const t = useTranslations('RoomsPage.HeroSection');
  const { ref, scrollToNext } = useScrollToNextSection();

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.background}>
        <Image
          src={roomImage}
          alt={t('imageAlt')}
          fill={true}
          sizes="100vw"
          priority={true}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.text}>{t('text')}</p>
        <ScrollDownButton onClick={scrollToNext} />
      </div>
    </section>
  );
};
