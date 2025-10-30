import type { LucideIcon } from 'lucide-react-native';
import {
  IdCard,
  BriefcaseBusiness,
  ShoppingCart,
  Building2,
  ContactRound,
  HandCoins,
  Banknote,
  Info,
  Store,
  Users,
  Handshake,
} from 'lucide-react-native';

export type RegisterData = {
  id: number;
  title?: string;
  description: string;
  icon: LucideIcon;
  additionalInfoIcon?: LucideIcon;
  additionalInfoDescription?: string[];
};

export const businessAboutData: RegisterData[] = [
  {
    id: 1,
    title: 'I own or represent a registered company',
    description: '(Sole proprietorship, corporation, LLC, etc.)',
    icon: BriefcaseBusiness,
  },
  {
    id: 2,
    title: 'I`m an individual running my own business',
    description: '(My business isn`t registered)',
    icon: IdCard,
  },
];

export const businessDescribeData: RegisterData[] = [
  {
    id: 1,
    description: 'Online seller',
    icon: ShoppingCart,
  },
  {
    id: 2,
    description: 'Small or medium-sized business',
    icon: Building2,
  },
  {
    id: 3,
    description: 'Freelancer, agency, or service provider',
    icon: ContactRound,
  },
];

export const howToUseData: RegisterData[] = [
  {
    id: 1,
    title: 'To get paid, send payments, and more',
    description: 'Get our full range of global payment services',
    icon: HandCoins,
    additionalInfoIcon: Info,
    additionalInfoDescription: [
      'Get paid hassle free in populare global currencies such as USD, EUR, GBP, JPY, and many other',
      'Expand into new markets where doing business requires a local bank account in order to get paid',
      'Save money by paying suppliers using your earnings, directly from your Payoneer account',
      'Enjoy features designed especially for global businesses, such as user management, cards, and working capital',
    ],
  },
  {
    id: 2,
    title: 'To send payments only',
    description: 'Pay via card, bank transfer, and more',
    icon: Banknote,
    additionalInfoIcon: Info,
    additionalInfoDescription: [
      'Send payments via card, bank transfer, or PayPal, depending, on your country',
      'Track and manage your international payments in one platform',
      'Enjoy low fees',
    ],
  },
];

export const receiveMoneyData: RegisterData[] = [
  {
    id: 1,
    description:
      'Marketpalces like Amazon, Facebook, eBay, or Upwork, where I sell goods or services to my customers',
    icon: Store,
  },
  {
    id: 2,
    description: 'Businesses I work with, like clients and remote employers',
    icon: Users,
  },
  {
    id: 3,
    description:
      'Customers who buy direct from my physical store or website`s online store',
    icon: Handshake,
  },
];
