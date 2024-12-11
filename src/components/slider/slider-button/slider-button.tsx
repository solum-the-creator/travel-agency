import { LeftArrow } from '../left-arrow/left-arrow';
import { RightArrow } from '../right-arrow/right-arrow';

import styles from './slider-button.module.scss';

export type Direction = 'left' | 'right';

type SliderButtonProps = {
  direction: Direction;
  disabled?: boolean;
  onClick: () => void;
};

export const SliderButton: React.FC<SliderButtonProps> = ({ direction, disabled, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      <span className={styles.arrow}>
        {direction === 'left' ? (
          <LeftArrow width={16} height={16} />
        ) : (
          <RightArrow width={16} height={16} />
        )}
      </span>
    </button>
  );
};
