import LightTitleBar from './LightTitleBar';
import DarkTitleBar from './DarkTitleBar';
import ScaffoldKit from './ScaffoldKit';
import wrapExampleComponent from './wrapExampleComponent';

const examples = [
  {
    title: 'Light Title Bar',
    path: '/examples/light-title-bar',
    component: wrapExampleComponent(LightTitleBar)
  },
  {
    title: 'Dark Title Bar',
    path: '/examples/dark-title-bar',
    component: wrapExampleComponent(DarkTitleBar)
  },
  {
    title: 'Scaffold Kit',
    path: '/examples/scaffold-kit',
    component: wrapExampleComponent(ScaffoldKit)
  }
];

export default examples;
