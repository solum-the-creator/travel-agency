import { useTranslations } from 'next-intl';

import { InputDatePicker } from '../input-date-picker/input-date-picker';

type InputRangePickerProps = {
  selectedStartDate?: Date;
  selectedEndDate?: Date;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
};

export const InputRangePicker: React.FC<InputRangePickerProps> = ({
  selectedStartDate,
  selectedEndDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const t = useTranslations('RoomBookingModal');

  return (
    <>
      <InputDatePicker
        label={t('dateStart')}
        selected={selectedStartDate}
        selectsStart={true}
        onChange={(date) => onStartDateChange(date as Date)}
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        minDate={selectedStartDate}
      />

      <InputDatePicker
        label={t('dateEnd')}
        selectsEnd={true}
        selected={selectedEndDate}
        onChange={(date) => onEndDateChange(date as Date)}
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        minDate={selectedStartDate}
      />
    </>
  );
};
