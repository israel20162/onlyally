import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const navSlice = createSlice({
  name: "navbar",
  initialState: {
    open: false,
    mainMobileNav: false
  },

  reducers: {
    setNavState: (state, action) => {
      state.open = action.payload;
    },
    setMainMobileNavState: (state, action) => {
      state.mainMobileNav = action.payload;
    }
  },

//   extraReducers: {
//     [HYDRATE]: (state, action) => {
//       // handle client
//       if (action.payload) {
//         state.open = action.payload.navbar.open;
//       }
//     },
//   },
});

export const { setNavState ,setMainMobileNavState } = navSlice.actions



export default navSlice.reducer;