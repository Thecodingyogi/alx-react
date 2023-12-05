import rootReducer from './reducers/rootReducer';

describe('rootReducer initial state', () => {
  it('should have the correct initial state structure', () => {
    const initialState = rootReducer(undefined, {});
    const expectedInitialState = {
      courses: new Map(),
      notifications: new Map(),
      ui: new Map(),
    };

    expect(initialState).toEqual(expectedInitialState);
  });
});

