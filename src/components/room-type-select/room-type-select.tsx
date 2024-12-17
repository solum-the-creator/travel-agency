import { ChangeEvent } from 'react';
import roomIcon from '@public/images/icons/room-icon.svg';
import Image from 'next/image';

import { RoomType } from '@/types/rooms';

import { Select } from '../select/select';

type RoomTypeSelectProps = {
  value: RoomType;
  onChange: (value: RoomType) => void;
};

export const RoomTypeSelect: React.FC<RoomTypeSelectProps> = ({ value, onChange }) => {
  const roomTypes: Array<{ value: RoomType; label: string }> = [
    { value: 'standard', label: 'Standard' },
    { value: 'royal', label: 'Royal' },
  ];

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value as RoomType;
    onChange(newValue);
  };

  return (
    <Select
      label="Room type"
      options={roomTypes}
      value={value}
      onChange={handleChange}
      icon={<Image src={roomIcon} alt="" width={16} height={16} />}
    />
  );
};
