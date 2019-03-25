import { useReducer, useEffect } from 'react';

const initialState = {
  path: window.location.pathname
};

const routerUpdateHook = (dispatch) => [() => {
  const updateRouter = () => {
    dispatch({ type: 'refresh' });
  };
  window.addEventListener('popstate', updateRouter);
}, []];

const setPathFunc = (dispatch) => (path) => {
  dispatch({ type: 'push', params: { path }});
};

const router = (state, action) => {
  switch (action.type) {
    case 'push': {
      history.pushState({}, document.title, action.params.path);
      return Object.assign({}, state, { path: window.location.pathname });
    }
    case 'pop': {
      history.popState();
      return Object.assign({}, state, { path: window.location.pathname });
    }
    case 'refresh': {
      return Object.assign({}, state, { path: window.location.pathname });
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
