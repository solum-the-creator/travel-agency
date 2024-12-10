import bgImage from '@public/images/hero-section-bg.jpg';
import Image from 'next/image';

import { BaseLayout } from '@/components/base-layout/base-layout';
import { DecorationText } from '@/components/decoration-text/decoration-text';
import { TourButton } from '@/components/tour-button/tour-button';
import { routes } from '@/constants/routes';

import styles from './hero-section.module.scss';

export const HeroSection: React.FC = () => {
  return (
    <BaseLayout>
      <section className={styles.section}>
        <div className={styles.content}>
          <DecorationText colorVariant="primary">
            <h2>Paradise View</h2>
          </DecorationText>
          <h1 className={styles.title}>Hotel for every moment rich in emotion</h1>
          <p className={styles.text}>Every moment feels like the first time in paradise view</p>
          <TourButton href={routes.tour}>Take a tour</TourButton>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={bgImage}
            alt="Home with pool"
            fill={true}
            priority={true}
            className={styles.image}
          />
        </div>
      </section>
    </BaseLayout>
  );
};
