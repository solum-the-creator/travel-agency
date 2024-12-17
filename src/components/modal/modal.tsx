'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import styles from './modal.module.scss';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
  closeOnBackdropClick?: boolean;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  header,
  className,
  closeOnBackdropClick = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget && closeOnBackdropClick) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={classNames(styles.modal, className)}>
        {header && (
          <div className={styles.header}>
            <div>{header}</div>
            <button className={styles.closeButton} onClick={onClose}>
              &times;
            </button>
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.body,
  );
};
