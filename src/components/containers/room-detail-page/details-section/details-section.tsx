'use client';

import { useState } from 'react';
import mapMarkerIcon from '@public/images/icons/map-marker-icon.svg';
import personIcon from '@public/images/icons/person-icon.svg';
import { Button, Rating } from '@solumzy/ui-lib-travel-agency';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { BaseBlock } from '@/components/base-block/base-block';
import { RoomBookingModal } from '@/components/modals/room-booking-modal/room-booking-modal';
import { RoomGallery } from '@/components/room-gallery/room-gallery';
import { RoomType } from '@/types/rooms';

import styles from './details-section.module.scss';

type DetailsSectionProps = {
  title: string;
  price: string;
  rating: number;
  description: string;
  location: string;
  personCount: number;
  type: RoomType;
  images: string[];
};

export const DetailsSection: React.FC<DetailsSectionProps> = ({
  title,
  price,
  rating,
  description,
  location,
  personCount,
  type,
  images,
}) => {
  const t = useTranslations('RoomDetailsPage.DetailsSection');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            <div className={styles.row}>
              <div className={styles.location}>
                <Image src={mapMarkerIcon} alt="Map marker icon" width={16} height={16} />
                <span className={styles.label}>{location}</span>
              </div>
              <div className={styles.line} />
              <div className={styles.personCount}>
                <Image src={personIcon} alt="Person icon" width={16} height={16} />
                <span className={styles.label}>
                  {personCount} {t('person')}
                </span>
              </div>
            </div>
            <p className={styles.description}>{description}</p>
            <Button
              variant="outline"
              borderRadius="medium"
              className={styles.button}
              onClick={openModal}
            >
              {t('reservationButton')}
            </Button>
          </div>
          <RoomBookingModal
            isOpen={isModalOpen}
            onClose={closeModal}
            roomName={title}
            locationName={location}
            roomType={type}
            personCount={personCount}
            price={price}
          />
        </div>
      </BaseBlock>
    </section>
  );
};
