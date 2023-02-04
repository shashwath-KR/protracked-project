import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "mycart",
    initialState: {
        myProductIds: [],
    },
    reducers : {
      AddProducts : (state, action) => {
        state.myProductIds = [action.payload, ...state.myProductIds];
      },
      RemoveProducts : (state, action) => {
        const SpliceOf = state.myProductIds.indexOf(action.payload);
        state.myProductIds.splice(SpliceOf, 1);
      },
      ClearAll : (state) => {
        state.myProductIds = []
      }  
    }
})

export default cartSlice;