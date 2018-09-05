// use immuatbility-helper as much as possible here
import { update } from 'immutability-helper';

const initialState = {
  title: 'LandingTitle',
  count: 0,
};

export function reducer(state = initialState, action) {

  switch(action) {
    case 'SHOW_COUNT':
      return state.count;

    case 'ADD_COUNT':
      return update(state, {
        count: { $set: state.count + 1 }
      });

    default:
      return state;
  }
}

export const showCount = () => ({
  action: 'SHOW_COUNT'
});

export const addCount = () => ({
  action: 'ADD_COUNT'
});
