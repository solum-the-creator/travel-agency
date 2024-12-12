import Image from 'next/image';

import { BaseBlock } from '@/components/base-block/base-block';

import styles from './room-images-section.module.scss';

type RoomImagesSectionProps = {
  images: string[];
};

export const RoomImagesSection: React.FC<RoomImagesSectionProps> = ({ images }) => {
  return (
    <section className={styles.section}>
      <BaseBlock>
        <div className={styles.imageList}>
          {images.map((image) => (
            <div className={styles.imageWrapper} key={image}>
              <Image
                className={styles.image}
                src={image}
                alt={image}
                fill={true}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          ))}
        </div>
      </BaseBlock>
    </section>
  );
};
