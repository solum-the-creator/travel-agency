import classNames from 'classnames';

import styles from './base-layout.module.scss';

type BaseLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
