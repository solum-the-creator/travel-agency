import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { companyLinks, quickLinks, socialLinks } from '@/constants/routes';

import { BaseBlock } from '../base-block/base-block';
import { DecorationText } from '../decoration-text/decoration-text';
import { SubscribeInput } from '../subscribe-input/subscribe-input';

import { LinksColumn } from './links-column/links-column';

import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  const t = useTranslations('Footer');

  return (
    <footer className={styles.footer}>
      <BaseBlock className={styles.container}>
        <div className={styles.content}>
          <div className={styles.column}>
            <DecorationText colorVariant="secondary">{t('title')}</DecorationText>
            <p className={styles.text}>{t('text')}</p>
          </div>

          <div className={styles.rightBlock}>
            <div className={styles.linksColumns}>
              <LinksColumn title={t('QuickLinks.title')} linksKey="QuickLinks" links={quickLinks} />
              <LinksColumn title={t('Company.title')} linksKey="Company" links={companyLinks} />
              <LinksColumn
                title={t('SocialMedia.title')}
                linksKey="SocialMedia"
                links={socialLinks}
              />
            </div>

            <div className={classNames(styles.column, styles.newsletter)}>
              <h4 className={styles.title}>{t('Newsletter.title')}</h4>
              <div className={styles.newsletterContent}>
                <p className={styles.text}>{t('Newsletter.text')}</p>
                <SubscribeInput
                  placeholder={t('Newsletter.placeholder')}
                  buttonText={t('Newsletter.button')}
                />
              </div>
            </div>
          </div>
        </div>
      </BaseBlock>

      <div className={styles.bottom}>
        <span className={styles.copyright}>{t('copyright')}</span>
      </div>
    </footer>
  );
};
