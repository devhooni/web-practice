import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: "Jihun",
  reducers: {
    changeName(state) {
      return "Oh" + state;
    },
  },
});

const stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

const data = createSlice({
  name: "data",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    plusCount(state, actions) {
      const n = state.findIndex((a) => {
        return a.id === actions.payload;
      });
      state[n].count += 1;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    data: data.reducer,
  },
});

export let { changeName } = user.actions;
export let { plusCount, addItem } = data.actions;
