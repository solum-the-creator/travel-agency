'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import translateIcon from '@public/images/icons/translate-icon.svg';
import classNames from 'classnames';
import Image from 'next/image';

import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';

import styles from './locale-switcher-select.module.scss';

type LocaleSwitcherSelectProps = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export const LocaleSwitcherSelect: React.FC<LocaleSwitcherSelectProps> = ({
  defaultValue,
  items,
  label,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (value: string) => {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
      setSelectedValue(value);
    });
    setIsOpen(false);
  };

  const handleTriggerClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.localeSwitcher} ref={dropdownRef}>
      <button
        className={classNames(styles.trigger, isPending && styles.pending)}
        aria-label={label}
        onClick={handleTriggerClick}
      >
        <span className={styles.icon}>
          <Image src={translateIcon} alt={label} width={24} height={24} />
        </span>
      </button>

      {isOpen && (
        <ul className={styles.dropdown}>
          {items.map((item) => (
            <li key={item.value}>
              <button
                className={classNames(styles.item, selectedValue === item.value && styles.selected)}
                onClick={() => handleChange(item.value)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
