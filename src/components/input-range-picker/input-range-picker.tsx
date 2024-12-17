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
  return (
    <>
      <InputDatePicker
        label="Check-in"
        selected={selectedStartDate}
        selectsStart={true}
        onChange={(date) => onStartDateChange(date as Date)}
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        minDate={selectedStartDate}
      />

      <InputDatePicker
        label="Check-out"
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
