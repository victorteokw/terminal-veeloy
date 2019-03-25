import { hot } from 'react-hot-loader';
import React from 'react';

import AppLayout from './layout/AppLayout';
import AppHeader from './layout/AppHeader';
import AppBody from './layout/AppBody';
import AppNav from './layout/AppNav';
import AppMain from './layout/AppMain';
import Tag from './components/Tag';
import NavItem from './layout/NavItem';
import Switch from './layout/Switch';
import Case from './layout/Case';
import Default from './layout/Default';

import pageList from './pages';
import NotFoundPage from './pages/NotFoundPage';

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
        {
          pageList.map((section) => [
            <Tag key={`tag-${section.tag}`}>
              {section.tag}
            </Tag>,
            ...section.pages.map((page) => (
              <NavItem
                key={`item-${page.path}`}
                selected={path === page.path}
                onClick={() => setPath(page.path)}
              >
                {page.title}
              </NavItem>
            ))
          ])
        }
        <Tag>Examples</Tag>
        <Tag>Documentations</Tag>
      </AppNav>
      <AppMain>
        <Switch value={path}>
          {
            pageList.map((section) => [
              ...section.pages.map((page) => (
                <Case value={page.path}>
                  <page.component />
                </Case>
              ))
            ])
          }
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
