import successIcon from '@public/images/icons/success-icon.svg';
import { Button } from '@solumzy/ui-lib-travel-agency';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Modal } from '@/components/modal/modal';

import styles from './success-booking-modal.module.scss';

type SuccessBookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SuccessBookingModal: React.FC<SuccessBookingModalProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('SuccessBooking');

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnBackdropClick={false} className={styles.modal}>
      <div className={styles.successContent}>
        <div className={styles.iconWrapper}>
          <Image
            src={successIcon}
            alt={t('successIconAlt')}
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
