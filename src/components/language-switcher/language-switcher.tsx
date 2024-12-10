import gbFlagIcon from '@public/images/icons/gb-flag-icon.svg';
import Image from 'next/image';

import styles from './language-switcher.module.scss';

export const LanguageSwitcher: React.FC = () => {
  return (
    <div className={styles.languageSwitcher}>
      <Image src={gbFlagIcon} alt="English" />
    </div>
  );
};
