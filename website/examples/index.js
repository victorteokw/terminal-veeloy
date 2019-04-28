import LightTitleBar from './LightTitleBar';
import DarkTitleBar from './DarkTitleBar';
import ScaffoldKit from './ScaffoldKit';
import wrapExampleComponent from './wrapExampleComponent';

const examples = [
  {
    title: 'Light Title Bar',
    path: '/examples/light-title-bar',
    component: wrapExampleComponent(LightTitleBar, 'Light Title Bar')
  },
  {
    title: 'Dark Title Bar',
    path: '/examples/dark-title-bar',
    component: wrapExampleComponent(DarkTitleBar, 'Dark Title Bar')
  },
  {
    title: 'Scaffold Kit',
    path: '/examples/scaffold-kit',
    component: wrapExampleComponent(ScaffoldKit, 'Scaffold Kit')
  }
];

export default examples;
