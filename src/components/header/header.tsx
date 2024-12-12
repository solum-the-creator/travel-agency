import { Logo } from '@/components/logo/logo';

import { BaseBlock } from '../base-block/base-block';
import { BurgerMenu } from '../burger-menu/burger-menu';
import { LocaleSwitcher } from '../locale-switcher/locale-switcher';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <BaseBlock className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
          <Logo />
          <BurgerMenu />
        </div>
        <LocaleSwitcher />
      </header>
    </BaseBlock>
  );
};
