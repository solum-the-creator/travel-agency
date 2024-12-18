'use client';

import { forwardRef } from 'react';
import ReactDatePicker, { DatePickerProps as ReactDatePickerProps } from 'react-datepicker';

import styles from './input-date-picker.module.scss';

type InputDatePickerProps = ReactDatePickerProps & {
  label?: string;
};

type CustomInputProps = {
  value?: string;
  className?: string;
  onClick?: () => void;
};

export const InputDatePicker = ({ label, ...props }: InputDatePickerProps) => {
  const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
    ({ value, onClick, className }, ref) => (
      <button className={className} type="button" onClick={onClick} ref={ref}>
        <span>{value}</span>
      </button>
    ),
  );

  CustomInput.displayName = 'CustomInput';

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <ReactDatePicker
        className={styles.datePicker}
        dateFormat={'dd MMM yyyy'}
        {...props}
        customInput={<CustomInput className={styles.input} />}
      />
    </div>
  );
};
