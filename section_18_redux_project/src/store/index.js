import {createStore} from 'redux';
import {createSlice} from "@reduxjs/toolkit";

const initialState = {counter: 0, showCounter: true};

createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++; //toolkit find code like this and with use of immer, creating copy of state etc
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
})
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state;
};

export const store = createStore(counterReducer);

