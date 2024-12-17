'use client';

import { useState } from 'react';
import { Button, Input } from '@solumzy/ui-lib-travel-agency';

import { InputRangePicker } from '@/components/input-range-picker/input-range-picker';
import { Modal } from '@/components/modal/modal';
import { RoomType } from '@/types/rooms';

import styles from './room-booking-modal.module.scss';

type RoomBookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  roomName: string;
  roomType: RoomType;
  locationName: string;
  personCount: number;
  price: string;
};

export const RoomBookingModal: React.FC<RoomBookingModalProps> = ({
  isOpen,
  onClose,
  roomName,
  roomType,
  locationName,
  personCount,
  price,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={styles.modal}
      header={<h2 className={styles.header}>Booking for {roomName}</h2>}
    >
      <div className={styles.content}>
        <div className={styles.bookingInfo}>
          <p className={styles.infoRow}>
            <strong>Room Type:</strong> {roomType}
          </p>
          <p className={styles.infoRow}>
            <strong>Location:</strong> {locationName}
          </p>
          <p className={styles.infoRow}>
            <strong>Person:</strong> {personCount}
          </p>
          <p className={styles.infoRow}>
            <strong>Price per Night:</strong> {price}
          </p>
        </div>

        <div className={styles.datePickerBlock}>
          <p className={styles.infoMessage}>Please provide your details to confirm the booking:</p>
          <div className={styles.datepicker}>
            <InputRangePicker
              selectedStartDate={startDate}
              selectedEndDate={endDate}
              onStartDateChange={setStartDate}
              onEndDateChange={setEndDate}
            />
          </div>
        </div>

        <div className={styles.inputBlock}>
          <div className={styles.inputWrapper}>
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
              fullWidth={true}
              className={styles.input}
            />
          </div>
          <div className={styles.inputWrapper}>
            <Input
              label="Phone Number"
              placeholder="e.g. +1234567890"
              type="tel"
              fullWidth={true}
              className={styles.input}
            />
          </div>
        </div>
      </div>
      <Button borderRadius="medium" size="large" type="submit" className={styles.confirmButton}>
        Confirm Booking
      </Button>
    </Modal>
  );
};
