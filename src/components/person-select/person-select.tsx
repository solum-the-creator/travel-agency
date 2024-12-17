import { ChangeEvent } from 'react';
import personIcon from '@public/images/icons/person-icon.svg';
import Image from 'next/image';

import { Select } from '../select/select';

type PersonSelectProps = {
  value: number;
  onChange: (value: number) => void;
};

export const PersonSelect: React.FC<PersonSelectProps> = ({ value, onChange }) => {
  const persons = Array.from({ length: 7 }, (_, index) => ({
    value: (index + 1).toString(),
    label: `0${index + 1}`,
  }));

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value);
    onChange(newValue);
  };

  return (
    <Select
      label="Person"
      options={persons}
      value={value}
      onChange={handleChange}
      icon={<Image src={personIcon} alt="" width={16} height={16} />}
    />
  );
};
