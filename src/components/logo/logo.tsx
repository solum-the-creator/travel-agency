import logoIcon from '@public/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@/constants/routes';

import styles from './logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <Link href={routes.home} className={styles.logo}>
      <Image src={logoIcon} alt="Paradise View" />
    </Link>
  );
};
