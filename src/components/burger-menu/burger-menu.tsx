'use client';

import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

import { Navbar } from '../navbar/navbar';

import styles from './burger-menu.module.scss';

export const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button className={styles.burger} onClick={toggleMenu} aria-label="Toggle menu">
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>

      <div ref={menuRef} className={classNames(styles.menu, { [styles.open]: isOpen })}>
        <button className={styles.closeButton} onClick={toggleMenu} aria-label="Close menu">
          ✕
        </button>
        <Navbar />
      </div>
      <div className={styles.navBarWrapper}>
        <Navbar />
      </div>
    </>
  );
};
