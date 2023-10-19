import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   todos: [ ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        
        state.todos.push(action.payload);
      
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { addTodo } = todoSlice.actions; 

const todoReducer = todoSlice.reducer;

export default todoReducer
