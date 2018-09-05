// use immuatbility-helper as much as possible here

const initialState = {
  title: 'LandingTitle',
  count: 0,
};

export function reducer(state = initialState, action) {

  switch(action) {
    case 'SHOW_COUNT':
      return state.count;

    default:
      return state;
  }
}

export const showCount = () => ({
  action: 'SHOW_COUNT'
});
