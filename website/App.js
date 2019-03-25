import { hot } from 'react-hot-loader';
import React from 'react';

import AppLayout from './Layout/AppLayout';
import AppHeader from './Layout/AppHeader';
import AppBody from './Layout/AppBody';
import AppNav from './Layout/AppNav';
import AppMain from './Layout/AppMain';
import Tag from './Tag';
import NavItem from './Layout/NavItem';
import NavItemSpacer from './Layout/NavItemSpacer';
import Switch from './Layout/Switch';
import Case from './Layout/Case';
import Default from './Layout/Default';

import HomePage from './HomePage';
import InstallationPage from './InstallationPage';
import NotFoundPage from './NotFoundPage';

import useRouter from './useRouter';

// import LightTitleBarDemo from './LightTitleBarDemo';
// import DarkTitleBarDemo from './DarkTitleBarDemo';
//
// import DemoList from './DemoList';

const App = () => {
  const [path, setPath] = useRouter();

  return <AppLayout>
    <AppHeader />
    <AppBody>
      <AppNav>
        <Tag>Introduction</Tag>
        <NavItem selected={path === '/'} onClick={() => setPath('/')}>
          Introduction
        </NavItem>
        <NavItemSpacer />
        <NavItem
          selected={path === '/installation'}
          onClick={() => setPath('/installation')}
        >
          Installation
        </NavItem>
        <Tag>Examples</Tag>
        <Tag>Documentations</Tag>
      </AppNav>
      <AppMain>
        <Switch value={path}>
          <Case value='/'>
            <HomePage />
          </Case>
          <Case value='/installation'>
            <InstallationPage />
          </Case>
          <Default>
            <NotFoundPage />
          </Default>
        </Switch>
      </AppMain>
    </AppBody>
  </AppLayout>;
};

// <DemoList>
//   {LightTitleBarDemo}
//   {DarkTitleBarDemo}
// </DemoList>

export default hot(module)(App);
