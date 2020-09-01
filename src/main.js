import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

// const plant = feed("plant");
// const cat = canEat("cat");
// cat.eat("salmon")
export const corn = storeState();
export const strawberry = storeState();


export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5); 

$(document).ready(function() {

  $('#feed').click(function() {
    const state1 = corn(feed);
    $('#soil-value').text(`Soil: ${state1.soil}`);
  });

  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentCornState = corn();
    $('#current-value').text(`Soil: ${currentCornState.soil}, Water: ${currentCornState.water}`);
  });

  $('#hydrate').click(function() {
    const state1 = corn(hydrate);
    $('#water-value').text(`Water: ${state1.water}`);
  });

  $('#feed-strawberry').click(function() {
    const state2 = strawberry(blueFood);
    $('#soil-value-strawberry').text(`Soil: ${state2.soil}`);
  });

  $('#show-state-strawberry').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentStrawberryState = strawberry();
    $('#current-value-strawberry').text(`Soil: ${currentStrawberryState.soil}, Water: ${currentStrawberryState.water}`);
  });

  $('#hydrate-strawberry').click(function() {
    const state2 = strawberry(hydrate);
    $('#water-value-strawberry').text(`Water: ${state2.water}`);
  });
});