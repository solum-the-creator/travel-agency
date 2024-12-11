'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { routesList } from '@/constants/routes';

import styles from './navbar.module.scss';

export const Navbar: React.FC = () => {
  const t = useTranslations('HeaderRoutes');
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {routesList.map(({ titleKey, route }) => (
          <li key={route} className={styles.item}>
            <Link
              href={route}
              className={classNames(styles.link, { [styles.active]: pathname === route })}
            >
              {t(titleKey)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
