import errorIcon from '@public/images/icons/error-icon.svg';
import { Button } from '@solumzy/ui-lib-travel-agency';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Modal } from '@/components/modal/modal';

import styles from './error-booking-modal.module.scss';

type ErrorBookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ErrorBookingModal: React.FC<ErrorBookingModalProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('ErrorBooking');

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnBackdropClick={false} className={styles.modal}>
      <div className={styles.errorContent}>
        <div className={styles.iconWrapper}>
          <Image
            src={errorIcon}
            alt={t('errorIconAlt')}
            className={styles.icon}
            width={50}
            height={50}
          />
        </div>

        <h2 className={styles.header}>{t('title')}</h2>

        <p className={styles.message}>{t('message')}</p>

        <Button onClick={onClose} borderRadius="medium" className={styles.closeButton}>
          {t('closeButton')}
        </Button>
      </div>
    </Modal>
  );
};
