import { Button } from '@solumzy/ui-lib-travel-agency';

import styles from './subscribe-input.module.scss';

type SubscribeInputProps = {
  placeholder?: string;
  buttonText?: string;
};

export const SubscribeInput: React.FC<SubscribeInputProps> = ({
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
}) => {
  return (
    <div className={styles.subscribeInput}>
      <input
        type="email"
        className={styles.input}
        placeholder={placeholder}
        aria-label="Email address"
      />
      <Button borderRadius="medium">{buttonText}</Button>
    </div>
  );
};
