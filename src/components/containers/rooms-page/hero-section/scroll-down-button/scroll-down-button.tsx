import arrowDown from '@public/images/icons/arrow-down.svg';
import Image from 'next/image';

import styles from './scroll-down-button.module.scss';

type ScrollDownButtonProps = {
  onClick: () => void;
};

export const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({ onClick }) => {
  return (
    <button aria-label="Scroll down" className={styles.scrollDownButton} onClick={onClick}>
      <span className={styles.arrow}>
        <Image src={arrowDown} alt="Scroll down" />
      </span>
    </button>
  );
};
