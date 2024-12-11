import { FacilitiesCard } from '@solumzy/ui-lib-travel-agency';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { BaseBlock } from '@/components/base-block/base-block';
import { facilities } from '@/constants/facilities';

import styles from './facilities-section.module.scss';

export const FacilitiesSection: React.FC = () => {
  const t = useTranslations('HomePage.FacilitiesSection');

  const facilitiesTitle = useTranslations('HomePage.FacilitiesSection.facilities');

  const facilitiesList = facilities.map(({ id, titleKey, icon }) => (
    <FacilitiesCard
      key={id}
      title={facilitiesTitle(titleKey)}
      image={<Image src={icon} alt={facilitiesTitle(titleKey)} />}
    />
  ));

  return (
    <BaseBlock>
      <section className={styles.section}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>{t('title')}</h2>
          <p className={styles.text}>{t('text')}</p>
        </div>
        <div className={styles.fascilities}>{facilitiesList}</div>
      </section>
    </BaseBlock>
  );
};
