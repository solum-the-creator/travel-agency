import successIcon from '@public/images/icons/success-icon.svg';
import { Button } from '@solumzy/ui-lib-travel-agency';
import Image from 'next/image';

import { Modal } from '@/components/modal/modal';

import styles from './success-booking-modal.module.scss';

type SuccessBookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SuccessBookingModal: React.FC<SuccessBookingModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnBackdropClick={false} className={styles.modal}>
      <div className={styles.successContent}>
        <div className={styles.iconWrapper}>
          <Image
            src={successIcon}
            alt="Success icon"
            className={styles.icon}
            width={50}
            height={50}
          />
        </div>

        <h2 className={styles.header}>Booking Successful!</h2>

        <p className={styles.message}>
          Your booking has been successfully confirmed. We will contact you soon to finalize the
          details. Thank you for choosing our service!
        </p>

        <Button onClick={onClose} borderRadius="medium" className={styles.closeButton}>
          Ok
        </Button>
      </div>
    </Modal>
  );
};
