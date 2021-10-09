import { Facebook, Instagram, Settings, Twitter } from '@material-ui/icons';

// import Menu from '@material-ui/icons/Menu';
// import MenuOpen from '@material-ui/icons/MenuOpen';
// import Search from '@material-ui/icons/Search';

interface SocialMedia {
  componentName: string;
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
    componentName: 'Settings',
    icon: Settings,
    path: '/settings'
  }
  // {
  //   componentName: 'Search',
  //   icon: Search,
  //   path: ''
  // },
]