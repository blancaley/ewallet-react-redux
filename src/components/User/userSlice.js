import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchUser from "./userAPI";

// Thunk (Async action)
export const getUser = createAsyncThunk(
  "user/getUser",
  async () => {
    const userInfo = await fetchUser();

    const { name: { first, last }} = userInfo.results[0];

    const user = {
      fullName: {
        first: first,
        last: last
      },
      cards: [{
        cardNumber: 8888888888888,
        cardMonth: 12,
        cardYear: 22,
        ccv: 999,
        vendor: "visa",
        isActive: true
      }]
    }
    return user;
  }
)

const userSlice = createSlice({
  name: 'card',
  initialState: {},
  reducers: {
    //actions
    addCard: (state, action) => {
      state.user.cards.push(action.payload);
    },
    deleteCard: (state, action) => {
    }
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.status = "Success";
      state.user = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.status = "Failed to load data";
    },
    [getUser.pending]: (state, action) => {
      state.status = "Loading";
    }
  }
})

export const { addCard, deleteCard } = userSlice.actions;

export default userSlice.reducer;