import { ChangeEvent } from 'react';
import roomIcon from '@public/images/icons/room-icon.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { RoomType } from '@/types/rooms';

import { Select } from '../select/select';

type RoomTypeSelectProps = {
  value: RoomType;
  onChange: (value: RoomType) => void;
};

export const RoomTypeSelect: React.FC<RoomTypeSelectProps> = ({ value, onChange }) => {
  const t = useTranslations('QuickBooking');
  const tRoomType = useTranslations('RoomType');
  const roomTypes: Array<{ value: RoomType; label: string }> = [
    { value: 'standard', label: tRoomType('standard') },
    { value: 'royal', label: tRoomType('royal') },
  ];

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value as RoomType;
    onChange(newValue);
  };

  return (
    <Select
      label={t('roomType')}
      options={roomTypes}
      value={value}
      onChange={handleChange}
      icon={<Image src={roomIcon} alt={t('roomTypeAlt')} width={16} height={16} />}
    />
  );
};
