import Link from 'next/link';

import { Route } from '@/constants/routes';

import styles from './links-column.module.scss';

type LinksColumnProps = {
  title: string;
  links: Route[];
};

export const LinksColumn: React.FC<LinksColumnProps> = ({ title, links }) => {
  return (
    <div className={styles.column}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.list}>
        {links.map(({ title, route }) => (
          <li key={title} className={styles.item}>
            <Link href={route} className={styles.link}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
