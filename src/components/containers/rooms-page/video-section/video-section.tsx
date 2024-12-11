'use client';

import videoBg from '@public/images/video-bg.jpg';
import { VideoPlayer } from '@solumzy/ui-lib-travel-agency';

import { videoUrl } from '@/constants/video';

import styles from './video-section.module.scss';

export const VideoSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.videoWrapper}>
        <VideoPlayer src={videoUrl} poster={videoBg.src} className={styles.video} />
      </div>
    </section>
  );
};
