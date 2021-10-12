import { Facebook, Instagram, Settings, Twitter } from '@material-ui/icons';

// import Instagram from '../../assets/svgs/instagram';
import Tiktok from '../../assets/svgs/tiktok';
import Twitch from '../../assets/svgs/twitch';

// import Search from '@material-ui/icons/Search';

interface SocialMedia {
  componentName: string;
  customSvg?: boolean;
  icon: any;
  path: string;
}

export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    componentName: 'Facebook',
    icon: Facebook,
    path: 'https://facebook.com/aplusandminus'
  },
  {
    componentName: 'Instagram',
    icon: Instagram,
    path: 'https://instagram.com/aplusandminus'
  },
  {
    componentName: 'Twitter',
    icon: Twitter,
    path: 'https://twitter.com/aplusandminus'
  },
  {
    componentName: 'Twitter',
    customSvg: true,
    icon: Twitch,
    path: 'https://twitter.com/aplusandminus'
  },
  {
    componentName: 'Twitter',
    customSvg: true,
    icon: Tiktok,
    path: 'https://twitter.com/aplusandminus'
  },
  {
    componentName: 'Settings',
    icon: Settings,
    path: '/settings'
  },
  // {
  //   componentName: 'Search',
  //   icon: Search,
  //   path: ''
  // },
]