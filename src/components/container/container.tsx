import classnames from 'classnames';

import styles from './container.module.scss';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={classnames(styles.container, className)}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
