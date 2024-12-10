'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { routesList } from '@/constants/routes';

import styles from './navbar.module.scss';

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {routesList.map(({ title, route }) => (
          <li key={route} className={styles.item}>
            <Link
              href={route}
              className={classNames(styles.link, { [styles.active]: pathname === route })}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
