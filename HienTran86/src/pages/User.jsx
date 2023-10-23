// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  loading: 'idle',
};

export const getListUser = createAsyncThunk('user/getListUser', async (params, thunkAPI) => {
  const response = await axios.get('http://localhost:3000/users');
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getListUser.pending]: (state) => {
      state.loading = 'loading';
    },
    [getListUser.fulfilled]: (state, action) => {
      state.loading = 'succeeded';
      state.users = action.payload;
    },
    [getListUser.rejected]: (state) => {
      state.loading = 'failed';
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
