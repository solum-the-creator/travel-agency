import { Button, Rating } from '@solumzy/ui-lib-travel-agency';
import { useTranslations } from 'next-intl';

import { BaseBlock } from '@/components/base-block/base-block';
import { RoomGallery } from '@/components/room-gallery/room-gallery';

import styles from './details-section.module.scss';

type DetailsSectionProps = {
  title: string;
  price: string;
  rating: number;
  description: string;
  images: string[];
};

export const DetailsSection: React.FC<DetailsSectionProps> = ({
  title,
  price,
  rating,
  description,
  images,
}) => {
  const t = useTranslations('RoomDetailsPage.DetailsSection');

  return (
    <section className={styles.section}>
      <BaseBlock>
        <div className={styles.content}>
          <div className={styles.galleryWrapper}>
            <RoomGallery images={images} />
          </div>
          <div className={styles.roomInfo}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.price}>₦ {price}</span>
            <div className={styles.row}>
              <Rating value={rating} />
              <div className={styles.line} />
              <span className={styles.reviews}>{t('reviewCount')}</span>
            </div>
            <p className={styles.description}>{description}</p>
            <Button variant="outline" borderRadius="medium" className={styles.button}>
              {t('reservationButton')}
            </Button>
          </div>
        </div>
      </BaseBlock>
    </section>
  );
};
