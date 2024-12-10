import classNames from 'classnames';

import styles from './decoration-text.module.scss';

type DecorationTextProps = {
  children: React.ReactNode;
  colorVariant?: 'primary' | 'secondary';
  className?: string;
};

export const DecorationText: React.FC<DecorationTextProps> = ({
  children,
  colorVariant = 'primary',
  className,
}) => {
  return (
    <span className={classNames(styles.decorationText, styles[colorVariant], className)}>
      {children}
    </span>
  );
};
