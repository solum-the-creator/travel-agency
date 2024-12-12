'use client';

import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import styles from './room-gallery.module.scss';

type RoomGalleryProps = {
  images: string[];
};

export const RoomGallery: React.FC<RoomGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handlePreviewClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.previewList}>
        {images.map((image) => (
          <button
            key={image}
            onClick={() => handlePreviewClick(image)}
            className={classNames(styles.previewButton, {
              [styles.selected]: image === selectedImage,
            })}
          >
            <Image
              src={image}
              alt="Room preview"
              width={60}
              height={60}
              className={styles.previewImage}
            />
          </button>
        ))}
      </div>
      <div className={styles.mainImageContainer}>
        <div className={styles.mainImageWrapper}>
          <Image
            src={selectedImage}
            alt="Selected room"
            fill={true}
            sizes="(max-width: 768px) 30vw, 400px"
            className={styles.mainImage}
          />
        </div>
      </div>
    </div>
  );
};
