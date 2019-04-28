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
import exampleList from './examples';
import NotFoundPage from './pages/NotFoundPage';

import useRouter from './useRouter';

const App = () => {
  const [{ path }, setPath] = useRouter();

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
        {
          exampleList.map((example) => <NavItem
            key={`example-${example.path}`}
            selected={path === example.path}
            onClick={() => setPath(example.path)}
          >
            {example.title}
          </NavItem>)
        }
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
          {
            exampleList.map((example) => (
              <Case key={example.path} value={example.path}>
                <example.component />
              </Case>
            ))
          }
          <Default>
            <NotFoundPage />
          </Default>
        </Switch>
      </AppMain>
    </AppBody>
  </AppLayout>;
};

export default hot(module)(App);
