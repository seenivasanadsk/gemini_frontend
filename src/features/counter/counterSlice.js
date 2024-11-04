import { createSlice } from "@reduxjs/toolkit";
import { CREATE_NEW_ORDER } from "../../app/endpoint";
import api from "../../app/api";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const incrementThunk = (dispatch, getState) => {
  const stateBefore = getState();
  console.log(`Counter before: ${stateBefore.counter}`, stateBefore);
  api(CREATE_NEW_ORDER, { name: "seeni" }).finally(() => {
    dispatch(increment(stateBefore.counter.value + 1));
  });
  const stateAfter = getState();
  console.log(`Counter after: ${stateAfter.counter}`, stateAfter);
};

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
