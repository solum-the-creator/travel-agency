import calendarIcon from '@public/images/icons/calendar-icon.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { DatePicker } from '../date-picker/date-picker';

import styles from './date-range-picker.module.scss';

type DatePickerProps = {
  selectedStartDate?: Date;
  selectedEndDate?: Date;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
};

export const DateRangePicker: React.FC<DatePickerProps> = ({
  selectedStartDate,
  selectedEndDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const t = useTranslations('QuickBooking');

  return (
    <>
      <div className={styles.datePicker}>
        <DatePicker
          label={t('dateStart')}
          icon={<Image src={calendarIcon} alt="" width={16} height={16} />}
          selected={selectedStartDate}
          selectsStart={true}
          onChange={(date) => onStartDateChange(date as Date)}
          startDate={selectedStartDate}
          endDate={selectedEndDate}
          minDate={selectedStartDate}
        />
      </div>
      <div className={styles.datePicker}>
        <DatePicker
          label={t('dateEnd')}
          icon={<Image src={calendarIcon} alt="" width={16} height={16} />}
          selectsEnd={true}
          selected={selectedEndDate}
          onChange={(date) => onEndDateChange(date as Date)}
          startDate={selectedStartDate}
          endDate={selectedEndDate}
          minDate={selectedStartDate}
        />
      </div>
    </>
  );
};
