import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';

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
  // {
  //   componentName: 'Search',
  //   icon: Search,
  //   path: ''
  // },
  {
    componentName: 'Twitter',
    icon: Twitter,
    path: 'https://twitter.com/aplusandminus'
  }
]