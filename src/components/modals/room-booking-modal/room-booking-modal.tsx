'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@solumzy/ui-lib-travel-agency';
import { useTranslations } from 'next-intl';

import { InputRangePicker } from '@/components/input-range-picker/input-range-picker';
import { Modal } from '@/components/modal/modal';
import { sendBookingEmail } from '@/services/email/email';
import { RoomType } from '@/types/rooms';
import { formatFullDate } from '@/utils/date';

import { ErrorBookingModal } from '../error-booking-modal/error-booking-modal';
import { SuccessBookingModal } from '../success-booking-modal/success-booking-modal';

import { BookingFormData, bookingSchema } from './room-boking-schema';

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
  const t = useTranslations('RoomBookingModal');

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: 'onTouched',
  });

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
      roomName,
      startDate: formatFullDate(startDate),
      endDate: formatFullDate(endDate),
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

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
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
        header={
          <h2 className={styles.header}>
            {t('title')} {roomName}
          </h2>
        }
      >
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.content}>
            <div className={styles.bookingInfo}>
              <p className={styles.infoRow}>
                <strong>{t('roomType')}:</strong> {roomType}
              </p>
              <p className={styles.infoRow}>
                <strong>{t('location')}:</strong> {locationName}
              </p>
              <p className={styles.infoRow}>
                <strong>{t('person')}:</strong> {personCount}
              </p>
              <p className={styles.infoRow}>
                <strong>{t('price')}:</strong> {price}
              </p>
            </div>

            <div className={styles.datePickerBlock}>
              <p className={styles.infoMessage}>{t('message')}</p>
              <div className={styles.datepicker}>
                <InputRangePicker
                  selectedStartDate={startDate}
                  selectedEndDate={endDate}
                  onStartDateChange={handleStartDateChange}
                  onEndDateChange={handleEndDateChange}
                />
              </div>
            </div>

            <div className={styles.inputBlock}>
              <div className={styles.inputWrapper}>
                <Input
                  label={t('nameLabel')}
                  placeholder={t('namePlaceholder')}
                  type="text"
                  fullWidth={true}
                  {...register('fullName')}
                  error={errors.fullName?.message}
                  className={styles.input}
                />
              </div>
              <div className={styles.inputWrapper}>
                <Input
                  label={t('phoneLabel')}
                  placeholder={t('phonePlaceholder')}
                  type="tel"
                  fullWidth={true}
                  {...register('phoneNumber')}
                  error={errors.phoneNumber?.message}
                  className={styles.input}
                />
              </div>
            </div>
          </div>
          <Button
            borderRadius="medium"
            size="large"
            type="submit"
            disabled={!isValid || isLoading}
            className={styles.confirmButton}
          >
            {isLoading ? t('bookingLoadingButton') : t('bookingButton')}
          </Button>
        </form>
      </Modal>
      <SuccessBookingModal isOpen={isSuccess} onClose={handleCloseSuccessModal} />
      <ErrorBookingModal isOpen={isError} onClose={handleCloseErrorModal} />
    </>
  );
};
