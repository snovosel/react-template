import { createStore } from 'redux';

import { rootReducer } from './rootReducer.js';

export function initializeStore(initialState) {
  const store = createStore(rootReducer, initialState);
  
  // if (module.hot) {
  //   console.log('is module hot');
  //   module.hot.accept("./rootReducer.js", () => {
  //     store.replaceReducer("./rootReducer.js");
  //   });
  // }

  return store;
}

export const store = initializeStore();

export default store;
