import { Button } from '@solumzy/ui-lib-travel-agency';
import Image from 'next/image';
import Link from 'next/link';

import { ServiceItem } from '../service-item/service-item';

import styles from './room-card.module.scss';

type RoomCardProps = {
  id: number;
  image: string;
  title: string;
  isAvailable: boolean;
  price: string;
};

export const RoomCard: React.FC<RoomCardProps> = ({ id, image, title, isAvailable, price }) => {
  return (
    <div className={styles.container}>
      <Link href={`/room/${id}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            className={styles.image}
            alt={title}
            sizes="(max-width: 768px) 33vw, 390px"
            fill={true}
          />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <Link href={`/room/${id}`} className={styles.link}>
            <h3 className={styles.title}>{title}</h3>
          </Link>
          <span className={styles.status}>Available: {isAvailable ? 'Yes' : 'No'}</span>
          <span className={styles.price}>₦ {price}</span>
        </div>
        <div className={styles.contentFooter}>
          <div className={styles.services}>
            <ServiceItem serviceType="wifi" />
            <ServiceItem serviceType="tv" />
            <ServiceItem serviceType="shower" />
          </div>
          <Button>Book now</Button>
        </div>
      </div>
    </div>
  );
};
