import IntroductionPage from './IntroductionPage';
import InstallationPage from './InstallationPage';
import LimitationsPage from './LimitationsPage';
import TryItOutPage from './TryItOutPage';

const pages = [
  {
    tag: 'Introduction',
    pages: [
      {
        title: 'Introduction',
        path: '/',
        component: IntroductionPage
      },
      {
        title: 'Installation',
        path: '/installation',
        component: InstallationPage
      },
      {
        title: 'Limitations',
        path: '/limitations',
        component: LimitationsPage
      }
    ]
  },
  {
    tag: 'Try It Out',
    pages: [
      {
        title: 'Try It Out!',
        path: '/try-it-out',
        component: TryItOutPage
      }
    ]
  }
];

export default pages;
