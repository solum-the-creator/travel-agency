'use client';

import { useState } from 'react';
import { Button } from '@solumzy/ui-lib-travel-agency';

import { RoomType } from '@/types/rooms';

import { DateRangePicker } from '../date-range-picker/date-range-picker';
import { LocationSelect } from '../location-select/location-select';
import { PersonSelect } from '../person-select/person-select';
import { RoomTypeSelect } from '../room-type-select/room-type-select';

import styles from './quick-booking.module.scss';

export const QuickBooking = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const [currentLocation, setCurrentLocation] = useState<string>('BY');
  const [roomType, setRoomType] = useState<RoomType>('standard');
  const [personCount, setPersonCount] = useState<number>(1);

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
        onStartDateChange={(date) => setStartDate(date)}
        onEndDateChange={(date) => setEndDate(date)}
      />

      <div className={styles.bookButton}>
        <Button borderRadius="medium" size="large">
          Book now
        </Button>
      </div>
    </div>
  );
};
