import React from 'react';
import useTitle from '../useTitle';
import usePath from 'react-use-path';

const IntroductionPage = ({}) => {
  useTitle('Introduction');
  const [path, setPath] = usePath();
  return <div>Introduction {path.fullpath}</div>;
};

export default IntroductionPage;
