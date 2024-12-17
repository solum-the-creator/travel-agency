'use client';

import { Button } from '@solumzy/ui-lib-travel-agency';

import { useBookingStore } from '@/store/booking-store';

import { DateRangePicker } from '../date-range-picker/date-range-picker';
import { LocationSelect } from '../location-select/location-select';
import { PersonSelect } from '../person-select/person-select';
import { RoomTypeSelect } from '../room-type-select/room-type-select';

import styles from './quick-booking.module.scss';

export const QuickBooking = () => {
  const {
    currentLocation,
    roomType,
    personCount,
    startDate,
    endDate,
    setCurrentLocation,
    setRoomType,
    setPersonCount,
    setDateRange,
  } = useBookingStore();

  const handleDateRangeChange = (start: Date, end: Date) => {
    setDateRange(start, end);
  };

  const openConfirmModal = () => {
    console.log('Confirm booking');
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectBlock}>
        <LocationSelect currentCountryCode={currentLocation} onChange={setCurrentLocation} />
      </div>
      <div className={styles.selectBlock}>
        <RoomTypeSelect value={roomType} onChange={setRoomType} />
      </div>
      <div className={styles.selectBlock}>
        <PersonSelect value={personCount} onChange={setPersonCount} />
      </div>

      <DateRangePicker
        selectedStartDate={startDate}
        selectedEndDate={endDate}
        onStartDateChange={(date) => handleDateRangeChange(date, endDate)}
        onEndDateChange={(date) => handleDateRangeChange(startDate, date)}
      />

      <div className={styles.bookButton}>
        <Button borderRadius="medium" size="large" onClick={openConfirmModal}>
          Book now
        </Button>
      </div>
    </div>
  );
};
