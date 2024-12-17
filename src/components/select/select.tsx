import { SelectHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './select.module.scss';

type Option = {
  value: string;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[];
  label?: string;
  icon?: React.ReactNode;
};

export const Select = ({ options, label, icon, className, ...props }: SelectProps) => {
  return (
    <div className={classNames(styles.container, className)}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.selectWrapper}>
          <select className={styles.select} {...props}>
            {options.map((option) => (
              <option key={option.value} value={option.value} className={styles.option}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
