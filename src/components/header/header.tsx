import { Logo } from '@/components/logo/logo';

import { BaseLayout } from '../base-layout/base-layout';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { Navbar } from '../navbar/navbar';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <BaseLayout className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
          <Logo />
          <Navbar />
        </div>
        <LanguageSwitcher />
      </header>
    </BaseLayout>
  );
};
