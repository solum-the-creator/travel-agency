import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Route } from '@/constants/routes';

import styles from './links-column.module.scss';

type LinksColumnProps = {
  title: string;
  linksKey: string;
  links: Route[];
};

export const LinksColumn: React.FC<LinksColumnProps> = ({ title, linksKey, links }) => {
  const t = useTranslations('Footer');

  return (
    <div className={styles.column}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.list}>
        {links.map(({ titleKey, route }) => (
          <li key={titleKey} className={styles.item}>
            <Link href={route} className={styles.link}>
              {t(`${linksKey}.${titleKey}`)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
