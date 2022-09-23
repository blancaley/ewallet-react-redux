import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import fetchUser from "../../features/user/userAPI";

// Thunk (Async action)
export const getUser = createAsyncThunk(
  "card/getUser",
  async () => {
    return fetch("https://randomuser.me/api/").then(res => res.json());
  }
)

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [
      {    
        cardNumber: 8888888888888,
        userFirstName: "ACTIVE",
        userLastName: "lastname",
        cardMonth: 12,
        cardYear: 22,
        ccv: 999,
        vendor: "vendortest",
        isActive: true
      },
      {    
        cardNumber: 8888888888888,
        userFirstName: "INACTIVE 1",
        userLastName: "lastname",
        cardMonth: 12,
        cardYear: 22,
        ccv: 999,
        vendor: "vendortest",
        isActive: false
      },
      {    
        cardNumber: 8888888888888,
        userFirstName: "INACTIVE 2",
        userLastName: "lastname",
        cardMonth: 12,
        cardYear: 22,
        ccv: 999,
        vendor: "vendortest",
        isActive: false
      }
    ]

  },
  reducers: {
    //actions
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {

      state.card = action.payload;
      state.status = "Found data";
    },
    [getUser.rejected]: (state, action) => {
      state.status = "Failed to load data";
    },
    [getUser.pending]: (state, action) => {
      state.status = "Loading";
      console.log(state.status)
    }
  }
  
})

//export const { } = cardSlice.actions;

export default cardSlice.reducer;