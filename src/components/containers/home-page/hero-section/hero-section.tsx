import bgImage from '@public/images/hero-section-bg.jpg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { BaseBlock } from '@/components/base-block/base-block';
import { DecorationText } from '@/components/decoration-text/decoration-text';
import { QuickBooking } from '@/components/quick-booking/quick-booking';
import { TourButton } from '@/components/tour-button/tour-button';
import { routes } from '@/constants/routes';

import styles from './hero-section.module.scss';

export const HeroSection: React.FC = () => {
  const t = useTranslations('HomePage.HeroSection');

  return (
    <BaseBlock>
      <section className={styles.section}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <DecorationText colorVariant="primary">
              <h2>{t('largeTitle')}</h2>
            </DecorationText>
            <h1 className={styles.title}>{t('title')}</h1>
            <p className={styles.text}>{t('text')}</p>
            <TourButton href={routes.tour}>{t('button')}</TourButton>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={bgImage}
              alt={t('imageAlt')}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.bookingWrapper}>
          <QuickBooking />
        </div>
      </section>
    </BaseBlock>
  );
};
