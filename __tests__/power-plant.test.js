import { changeState, feed, storeState, stateControl } from './../src/power-plant.js';

test('should store the state of an object', () => {
  const newState = stateControl(feed);

  // testObject.storeState();
  // expect(newState.soil).toEqual(1);
  expect(stateControl = storeState()).toEqual(1);
});