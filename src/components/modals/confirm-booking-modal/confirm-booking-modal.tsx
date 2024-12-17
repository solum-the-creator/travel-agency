'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@solumzy/ui-lib-travel-agency';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';

import { Modal } from '@/components/modal/modal';
import { sendBookingEmail } from '@/services/email/email';
import { useBookingStore } from '@/store/booking-store';
import { formatFullDate } from '@/utils/date';

import { ErrorBookingModal } from '../error-booking-modal/error-booking-modal';
import { SuccessBookingModal } from '../success-booking-modal/success-booking-modal';

import { BookingFormData, bookingSchema } from './confirm-booking-schema';

import styles from './confirm-booking-modal.module.scss';

type ConfirmBookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ConfirmBookingModal: React.FC<ConfirmBookingModalProps> = ({ isOpen, onClose }) => {
  const { currentLocation, roomType, personCount, startDate, endDate } = useBookingStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: 'onTouched',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    countries.registerLocale(enLocale);
  }, []);

  const locationName = countries.getName(currentLocation, 'en', { select: 'official' }) || '';
  const formatedStartDate = formatFullDate(startDate);
  const formatedEndDate = formatFullDate(endDate);

  const onSubmit = async (data: BookingFormData) => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    const isSuccess = await sendBookingEmail({
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      locationName,
      roomType,
      personCount,
      startDate: formatedStartDate,
      endDate: formatedEndDate,
    });

    setIsLoading(false);

    if (isSuccess) {
      reset();
      setIsSuccess(true);
      onClose();
    } else {
      setIsError(true);
    }
  };

  const handleCloseSuccessModal = () => {
    setIsSuccess(false);
  };

  const handleCloseErrorModal = () => {
    setIsError(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className={styles.modal}
        header={<h2 className={styles.header}>Confirm Your Booking</h2>}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.content}>
            <div className={styles.bookingInfo}>
              <p className={styles.infoRow}>
                <strong>Location:</strong> {locationName}
              </p>
              <p className={styles.infoRow}>
                <strong>Room Type:</strong> {roomType}
              </p>
              <p className={styles.infoRow}>
                <strong>Guests:</strong> {personCount}
              </p>
              <p className={styles.infoRow}>
                <strong>Dates:</strong> {formatedStartDate} - {formatedEndDate}
              </p>
            </div>

            <div className={styles.inputBlock}>
              <p className={styles.infoMessage}>
                Please provide your details to confirm the booking:
              </p>
              <div className={styles.inputWrapper}>
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  type="text"
                  fullWidth={true}
                  {...register('fullName')}
                  error={errors.fullName?.message}
                  className={styles.input}
                />
              </div>
              <div className={styles.inputWrapper}>
                <Input
                  label="Phone Number"
                  placeholder="e.g. +1234567890"
                  type="tel"
                  fullWidth={true}
                  {...register('phoneNumber')}
                  error={errors.phoneNumber?.message}
                  className={styles.input}
                />
              </div>
            </div>

            <Button
              borderRadius="medium"
              size="large"
              type="submit"
              disabled={!isValid || isLoading}
              className={styles.confirmButton}
            >
              {isLoading ? 'Sending...' : 'Confirm Booking'}
            </Button>
          </div>
        </form>
      </Modal>
      <SuccessBookingModal isOpen={isSuccess} onClose={handleCloseSuccessModal} />
      <ErrorBookingModal isOpen={isError} onClose={handleCloseErrorModal} />
    </>
  );
};
