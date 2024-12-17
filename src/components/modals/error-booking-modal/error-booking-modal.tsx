import errorIcon from '@public/images/icons/error-icon.svg';
import { Button } from '@solumzy/ui-lib-travel-agency';
import Image from 'next/image';

import { Modal } from '@/components/modal/modal';

import styles from './error-booking-modal.module.scss';

type ErrorBookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ErrorBookingModal: React.FC<ErrorBookingModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnBackdropClick={false} className={styles.modal}>
      <div className={styles.errorContent}>
        <div className={styles.iconWrapper}>
          <Image src={errorIcon} alt="Error icon" className={styles.icon} width={50} height={50} />
        </div>

        <h2 className={styles.header}>Booking Failed</h2>

        <p className={styles.message}>
          Something went wrong while processing your booking. Please try again later or contact our
          support team.
        </p>

        <Button onClick={onClose} borderRadius="medium" className={styles.closeButton}>
          Try Again
        </Button>
      </div>
    </Modal>
  );
};
