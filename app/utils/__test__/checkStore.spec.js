import checkStore from '../checkStore';

describe('checkStore', () => {
  test('should not throw if passed valid store shape', () => {
    expect(() => checkStore(createStore())).not.toThrow();
  });

  test('should throw if passed invalid store shape', () => {
    expect(() => checkStore({})).toThrow();
    expect(() => checkStore({ ...createStore(), injectedReducers: null })).toThrow();
    expect(() => checkStore({ ...createStore(), replaceReducer: null })).toThrow();
  });

  function createStore() {
    return {
      dispatch: () => {},
      subscribe: () => {},
      getState: () => {},
      replaceReducer: () => {},
      injectedReducers: {}
    };
  }
});
