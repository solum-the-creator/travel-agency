import Link from 'next/link';

import styles from './tour-button.module.scss';

type TourButtonProps = {
  children?: string;
  href: string;
};

export const TourButton: React.FC<TourButtonProps> = ({ children, href }) => {
  return (
    <Link href={href} className={styles.tourButton}>
      <div className={styles.icon}>
        <span className={styles.arrow}>▶</span>
      </div>
      <span className={styles.text}>{children}</span>
    </Link>
  );
};
