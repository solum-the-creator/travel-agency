'use client';

import { forwardRef } from 'react';
import ReactDatePicker, { DatePickerProps as ReactDatePickerProps } from 'react-datepicker';
import arrowIcon from '@public/images/icons/arrow-down-sm-icon.svg';
import Image from 'next/image';

import styles from './date-picker.module.scss';

type DatePickerProps = ReactDatePickerProps & {
  label?: string;
  icon?: React.ReactNode;
};

type CustomInputProps = {
  value?: string;
  className?: string;
  onClick?: () => void;
};

export const DatePicker = ({ label, icon, ...props }: DatePickerProps) => {
  const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
    ({ value, onClick, className }, ref) => (
      <button className={className} onClick={onClick} ref={ref}>
        <span>{value}</span>
        <span className={styles.arrow}>
          <Image src={arrowIcon} alt="Arrow" width={8} height={8} />
        </span>
      </button>
    ),
  );

  CustomInput.displayName = 'CustomInput';

  return (
    <div className={styles.container}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content}>
        {label && <label className={styles.label}>{label}</label>}
        <ReactDatePicker
          className={styles.datePicker}
          dateFormat={'dd MMM yyyy'}
          {...props}
          customInput={<CustomInput className={styles.input} />}
        />
      </div>
    </div>
  );
};
