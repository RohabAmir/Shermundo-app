import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {

}


const initialState: AuthState = {

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Use PayloadAction to type the action payload
 
  },
});

export const {  } = authSlice.actions;

export default authSlice.reducer;
