import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchUser from "./userAPI";

// Thunk (Async action
export const getUser = createAsyncThunk(
  // Type
  "user/getUser",
  // Function
  async () => {
    const userInfo = await fetchUser();

    // Destructure user name
    const { name: { first, last }} = userInfo.results[0];

    // An user can have many cards
    const user = {
      fullName: {
        first: first,
        last: last
      },
      cards: [{
        cardNumber: "8888888888888888".match(/.{1,4}/g).join(" "),
        cardMonth: "12",
        cardYear: "22",
        ccv: "999",
        vendor: "visa",
        isActive: true
      }]
    }
    return user;
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    //actions
    addCard: (state, { payload }) => {
      state.user.cards.push(payload);
    },
    deleteCard: (state, { payload }) => {
      state.user.cards = state.user.cards
        .filter(({ cardNumber }) => cardNumber !== payload.cardNumber);
    },
    switchActiveCard: (state, { payload }) => {
      state.user.cards
        .find(({ isActive }) => isActive)
        .isActive = false;

      state.user.cards
        .find(({ cardNumber }) => cardNumber === payload.cardNumber)
        .isActive = true;
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

export const { addCard, deleteCard, switchActiveCard } = userSlice.actions;

export default userSlice.reducer;