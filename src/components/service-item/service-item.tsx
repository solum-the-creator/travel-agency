import showerIcon from '@public/images/icons/shower-service-icon.svg';
import tvIcon from '@public/images/icons/tv-service-icon.svg';
import wifiIcon from '@public/images/icons/wifi-service-icon.svg';
import Image from 'next/image';

import { Service } from '@/types/service';

import styles from './service-item.module.scss';

type ServiceItemProps = {
  serviceType: Service;
};

export const ServiceItem: React.FC<ServiceItemProps> = ({ serviceType }) => {
  const getCurrentIcon = () => {
    switch (serviceType) {
      case 'wifi':
        return wifiIcon;
      case 'tv':
        return tvIcon;
      case 'shower':
        return showerIcon;
      default:
        return wifiIcon;
    }
  };

  return (
    <span className={styles.service}>
      <Image
        src={getCurrentIcon()}
        alt={serviceType}
        className={styles.icon}
        width={16}
        height={16}
      />
    </span>
  );
};
