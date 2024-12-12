import { BaseBlock } from '@/components/base-block/base-block';
import { RoomGallery } from '@/components/room-gallery/room-gallery';

import styles from './details-section.module.scss';

type DetailsSectionProps = {
  images: string[];
};

export const DetailsSection: React.FC<DetailsSectionProps> = ({ images }) => {
  return (
    <section className={styles.section}>
      <BaseBlock>
        <div className={styles.content}>
          <div className={styles.galleryWrapper}>
            <RoomGallery images={images} />
          </div>
          <div className={styles.roomInfo}>
            <h2 className={styles.title}>Room info</h2>
          </div>
        </div>
      </BaseBlock>
    </section>
  );
};
