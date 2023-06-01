import {createStore} from 'redux';
import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
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

export const store = configureStore({
  reducer: counterSlice.reducer //in this case we can use only this reducer (we don't have more)
  // reducer: {counter: counterSlice.reducer} //configure store will merge into on big reducer, we can use this approach when we have more reducers
});

