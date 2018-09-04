import { createStore } from 'redux';

import { rootReducer } from './rootReducer.js';

export default function initializeStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept("./rootReducer.js", () => {
      store.replaceReducer("./rootReducer.js");
    });
  }
}

export const store = initializeStore();
