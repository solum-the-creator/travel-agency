import { useLocale } from 'next-intl';

import { LocaleSwitcherSelect } from '../locale-switcher-select/locale-switcher-select';

export const LocaleSwitcher: React.FC = () => {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        { value: 'en', label: 'English' },
        { value: 'de', label: 'Deutsch' },
      ]}
      label="Change language"
    />
  );
};
