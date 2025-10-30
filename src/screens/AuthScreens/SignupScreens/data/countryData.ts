import { ImageSourcePropType } from 'react-native';

export type Countries = {
  id: number;
  counrtyName: string;
  countryFlag: ImageSourcePropType;
};

export const countries: Countries[] = [
  {
    id: 1,
    counrtyName: 'United Kingdom',
    countryFlag: require('../../../../../assets/img/countryFlags/uk.png'),
  },
  {
    id: 2,
    counrtyName: 'China',
    countryFlag: require('../../../../../assets/img/countryFlags/china.png'),
  },
  {
    id: 3,
    counrtyName: 'Russia',
    countryFlag: require('../../../../../assets/img/countryFlags/russia.png'),
  },
  {
    id: 4,
    counrtyName: 'Ukraine',
    countryFlag: require('../../../../../assets/img/countryFlags/ukraine.png'),
  },
  {
    id: 5,
    counrtyName: 'Germany',
    countryFlag: require('../../../../../assets/img/countryFlags/germany.png'),
  },
  {
    id: 6,
    counrtyName: 'Japan',
    countryFlag: require('../../../../../assets/img/countryFlags/japan.png'),
  },
  {
    id: 7,
    counrtyName: 'Austria',
    countryFlag: require('../../../../../assets/img/countryFlags/austria.png'),
  },
  {
    id: 8,
    counrtyName: 'Brazil',
    countryFlag: require('../../../../../assets/img/countryFlags/brazil.png'),
  },
  {
    id: 9,
    counrtyName: 'Canada',
    countryFlag: require('../../../../../assets/img/countryFlags/canada.png'),
  },
  {
    id: 10,
    counrtyName: 'Czech Republic',
    countryFlag: require('../../../../../assets/img/countryFlags/czech-republic.png'),
  },
  {
    id: 11,
    counrtyName: 'France',
    countryFlag: require('../../../../../assets/img/countryFlags/france.png'),
  },
  {
    id: 12,
    counrtyName: 'Ireland',
    countryFlag: require('../../../../../assets/img/countryFlags/ireland.png'),
  },
  {
    id: 13,
    counrtyName: 'Israel',
    countryFlag: require('../../../../../assets/img/countryFlags/israel.png'),
  },
  {
    id: 14,
    counrtyName: 'Italy',
    countryFlag: require('../../../../../assets/img/countryFlags/italy.png'),
  },
  {
    id: 15,
    counrtyName: 'Luxembourg',
    countryFlag: require('../../../../../assets/img/countryFlags/luxembourg.png'),
  },
  {
    id: 16,
    counrtyName: 'Poland',
    countryFlag: require('../../../../../assets/img/countryFlags/poland.png'),
  },
  {
    id: 17,
    counrtyName: 'Portugal',
    countryFlag: require('../../../../../assets/img/countryFlags/portugal.png'),
  },
  {
    id: 18,
    counrtyName: 'South Korea',
    countryFlag: require('../../../../../assets/img/countryFlags/south-korea.png'),
  },
  {
    id: 19,
    counrtyName: 'Spain',
    countryFlag: require('../../../../../assets/img/countryFlags/spain.png'),
  },
  {
    id: 20,
    counrtyName: 'Sweden',
    countryFlag: require('../../../../../assets/img/countryFlags/sweden.png'),
  },
  {
    id: 21,
    counrtyName: 'Switzerland',
    countryFlag: require('../../../../../assets/img/countryFlags/switzerland.png'),
  },
  {
    id: 22,
    counrtyName: 'Turkey',
    countryFlag: require('../../../../../assets/img/countryFlags/turkey.png'),
  },
  {
    id: 23,
    counrtyName: 'United States',
    countryFlag: require('../../../../../assets/img/countryFlags/united-states.png'),
  },
];

export const defaultCountries = countries[0];
