import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";


// counterSlice.actions.toggleCounter //will create action objects (action creators) with unique identifier behind the scene
export const store = configureStore({
  // reducer: counterSlice.reducer //in this case we can use only this reducer (we don't have more)
  reducer: {counter: counterReducer, auth: authReducer} //configure store will merge into one reducer, we can use this approach when we have more reducers
});

