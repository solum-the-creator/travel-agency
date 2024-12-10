import classNames from 'classnames';

import styles from './base-block.module.scss';

type BaseBlockProps = {
  children: React.ReactNode;
  className?: string;
};

export const BaseBlock: React.FC<BaseBlockProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
