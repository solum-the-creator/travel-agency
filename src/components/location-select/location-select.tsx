import { ChangeEvent, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import mapMarkerIcon from '@public/images/icons/map-marker-icon.svg';
import Image from 'next/image';

import { COUNTRIES_QUERY } from '@/services/apollo-client/query';
import { Country } from '@/types/country';

import { Select } from '../select/select';

type LocationSelectProps = {
  currentCountryCode?: string;
  onChange: (value: string) => void;
};

export const LocationSelect: React.FC<LocationSelectProps> = ({ currentCountryCode, onChange }) => {
  const { data } = useQuery<{ countries: Country[] }>(COUNTRIES_QUERY);

  const [selectedCountry, setSelectedCountry] = useState<string>(currentCountryCode || '');

  useEffect(() => {
    if (currentCountryCode) {
      setSelectedCountry(currentCountryCode);
    }
  }, [currentCountryCode]);

  const countryOptions =
    data?.countries.map((country) => ({
      value: country.code,
      label: country.name,
    })) ?? [];

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedCountry(newValue);
    onChange(newValue);
  };

  return (
    <Select
      options={countryOptions}
      value={selectedCountry}
      onChange={handleChange}
      label="Location"
      icon={<Image src={mapMarkerIcon} alt="Map Marker Icon" width={16} height={16} />}
    />
  );
};
