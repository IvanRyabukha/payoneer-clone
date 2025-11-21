import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import {
  type ICountry,
  countries,
  defaultCountries,
} from '@/screens/RegistrationScreens/data/country.data';

export function useLocation() {
  const [country, setCountry] = useState<ICountry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      async pos => {
        const { latitude, longitude } = pos.coords;

        try {
          const geo = await Geocoder.from(latitude, longitude);

          const countryName = geo.results[0].address_components.find(c =>
            c.types.includes('country'),
          )?.long_name;

          if (!countryName) {
            setCountry(defaultCountries);
            setLoading(false);
            return;
          }

          const match = countries.find(
            c => c.counrtyName.toLowerCase() === countryName.toLowerCase(),
          );

          setCountry(match ?? defaultCountries);
        } catch (e) {
          console.warn('Geocoding error:', e);
          setCountry(defaultCountries);
        } finally {
          setLoading(false);
        }
      },
      error => {
        console.warn('Geolocation error:', error);
        setCountry(defaultCountries);
        setLoading(false);
      },
      { enableHighAccuracy: true },
    );
  }, []);

  return { country, loading };
}
