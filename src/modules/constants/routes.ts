import About from '../../pages/about/about';
import App from '../../App';
import Blog from '../../pages/blog/blog';
import Contact from '../../pages/contact/contact';
import Events from '../../pages/events/events';
import GitHub from '../../pages/github/github';
import Music from '../../pages/music/music';
import NotFound from '../../pages/404/404';
import Portfolio from '../../pages/portfolio/portfolio';
import Settings from '../../pages/settings/settings';

interface Routes {
  component: () => JSX.Element;
  componentName: string;
  isNotMenu?: boolean;
  path: string;
  subMenu?: boolean;
}

export const ROUTES: Routes[] = [
  {
    component: App,
    componentName: 'home',
    path: '/'
  },
  {
    component: About,
    componentName: 'about',
    path: '/about'
  },
  {
    component: Blog,
    componentName: 'blog',
    path: '/portfolio/blog'
  },
  {
    component: Contact,
    componentName: 'contact',
    path: '/contact'
  },
  {
    component: Events,
    componentName: 'events',
    path: '/events'
  },
  {
    component: GitHub,
    componentName: 'github',
    path: '/portfolio/github',
    subMenu: true
  },
  {
    component: Music,
    componentName: 'music',
    path: '/portfolio/music',
    subMenu: true
  },
  {
    component: Portfolio,
    componentName: 'portfolio',
    path: '/portfolio'
  },
  {
    component: Settings,
    componentName: 'settings',
    isNotMenu: true,
    path: '/settings'
  },
  {
    component: NotFound,
    componentName: '404',
    isNotMenu: true,
    path: '/404'
  },
]