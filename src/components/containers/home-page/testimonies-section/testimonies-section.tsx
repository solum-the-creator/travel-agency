import { ReviewCard } from '@solumzy/ui-lib-travel-agency';
import { useTranslations } from 'next-intl';

import { Slider } from '@/components/slider/slider';
import { testimonies } from '@/constants/testimonies';

import styles from './testimonies-section.module.scss';

export const TestimoniesSection: React.FC = () => {
  const t = useTranslations('HomePage.TestimoniesSection');

  const testimoniesCards = testimonies.map(({ id, date, text, author, rating }) => (
    <ReviewCard
      key={id}
      date={date}
      text={text}
      name={author.name}
      avatarUrl={author.image}
      rating={rating}
    />
  ));

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.testimonies}>
        <Slider items={testimoniesCards} />
      </div>
    </section>
  );
};
