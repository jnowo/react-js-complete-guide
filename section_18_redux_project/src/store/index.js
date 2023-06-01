import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; //toolkit find code like this and with use of immer, creating copy of state etc
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const initialAuthState = {isAuthenticated: false};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
})

// counterSlice.actions.toggleCounter //will create action objects (action creators) with unique identifier behind the scene
export const store = configureStore({
  // reducer: counterSlice.reducer //in this case we can use only this reducer (we don't have more)
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer} //configure store will merge into one reducer, we can use this approach when we have more reducers
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;