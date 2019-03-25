import { useReducer, useEffect } from 'react';

const initialState = {
  path: window.location.pathname,
  title: document.title
};

const routerUpdateHook = (dispatch) => [() => {
  const updateRouter = () => {
    dispatch({ type: 'refresh' });
  };
  window.addEventListener('popstate', updateRouter);
}, []];

const setPathFunc = (dispatch) => (path, title) => {
  dispatch({ type: 'push', params: { path, title }});
};

const router = (state, action) => {
  switch (action.type) {
    case 'push': {
      history.pushState(
        {},
        action.params.title || document.title,
        action.params.path
      );
      document.title = action.params.title;
      return Object.assign({}, state, {
        path: window.location.pathname,
        title: document.title
      });
    }
    case 'pop': {
      history.popState();
      return Object.assign({}, state, {
        path: window.location.pathname,
        title: document.title
      });
    }
    case 'refresh': {
      return Object.assign({}, state, {
        path: window.location.pathname,
        title: document.title
      });
    }
    default:
      throw new Error(`Unknown action '${action.type}'.`);
  }
};

const useRouter = () => {
  const [{ path }, dispatch] = useReducer(router, initialState);
  useEffect(...routerUpdateHook(dispatch));
  const setPath = setPathFunc(dispatch);
  return [path, setPath];
};

export default useRouter;
