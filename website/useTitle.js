import { useEffect } from 'react';

let defaultTitle = '', defaultSuffix = '';

const useTitle = (title, dependencies = []) => {
  useEffect(() => {
    document.title = title + defaultSuffix;
    return () => {
      if (defaultTitle) {
        document.title = defaultTitle;
      }
    };
  }, dependencies);
};

useTitle.setDefault = (title) => {
  defaultTitle = title;
};

useTitle.setSuffix = (suffix) => {
  defaultSuffix = suffix;
};

export default useTitle;
