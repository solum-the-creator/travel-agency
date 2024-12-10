import classNames from 'classnames';

import { companyLinks, quickLinks, socialLinks } from '@/constants/routes';

import { BaseBlock } from '../base-block/base-block';
import { DecorationText } from '../decoration-text/decoration-text';
import { SubscribeInput } from '../subscribe-input/subscribe-input';

import { LinksColumn } from './links-column/links-column';

import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <BaseBlock className={styles.container}>
        <div className={styles.content}>
          <div className={styles.column}>
            <DecorationText colorVariant="secondary">Paradise View</DecorationText>
            <p className={styles.text}>
              The service at the Hotel Monteleone was exceptional. There was absolutely no issue
              that was not addressed timely and with satisfactory results. We were particulary
              impressed with how the hotel staff anticipated our needs (periodically coming by the
              Board Room to check with us)
            </p>
          </div>

          <LinksColumn title="Quick links" links={quickLinks} />
          <LinksColumn title="Company" links={companyLinks} />
          <LinksColumn title="Social media" links={socialLinks} />

          <div className={classNames(styles.column, styles.newsletter)}>
            <h4 className={styles.title}>Newsletter</h4>
            <div className={styles.newsletterContent}>
              <p className={styles.text}>
                Kindly subscribe to our newsletter to get latest deals on our rooms and vacation
                discount.
              </p>
              <SubscribeInput />
            </div>
          </div>
        </div>
      </BaseBlock>

      <div className={styles.bottom}>
        <span className={styles.copyright}>Paradise view 2024</span>
      </div>
    </footer>
  );
};
