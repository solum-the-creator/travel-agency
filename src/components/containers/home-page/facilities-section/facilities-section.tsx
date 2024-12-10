import { FacilitiesCard } from '@solumzy/ui-lib-travel-agency';
import Image from 'next/image';

import { BaseBlock } from '@/components/base-block/base-block';
import { facilities } from '@/constants/facilities';

import styles from './facilities-section.module.scss';

export const FacilitiesSection: React.FC = () => {
  const facilitiesList = facilities.map(({ id, title, icon }) => (
    <FacilitiesCard key={id} title={title} image={<Image src={icon} alt={title} />} />
  ));

  return (
    <BaseBlock>
      <section className={styles.section}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Our Facilities</h2>
          <p className={styles.text}>We offer modern (5 star) hotel facilities for your comfort.</p>
        </div>
        <div className={styles.fascilities}>{facilitiesList}</div>
      </section>
    </BaseBlock>
  );
};
