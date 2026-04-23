import { createSlice } from '@reduxjs/toolkit';
const loginSignUpSlice = createSlice({
  name: 'log',
  initialState: {user: null, isLogged: false},
  reducers:{
    loginUser: (state, action) => {
      state.user = action.payload; 
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    }
  }
})

export const { loginUser, logoutUser} = loginSignUpSlice.actions;
export default loginSignUpSlice.reducer;