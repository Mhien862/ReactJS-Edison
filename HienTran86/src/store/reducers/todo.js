import { createSlice, current } from '@reduxjs/toolkit'


const initialState = {
  posts: []
};

export const todoSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { id } = action.payload;
      state.posts.push(action.payload);
    },

    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return { ...todo, description: action.payload.description };
        }
        return todo;
      });
    },
    

    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.posts = state.posts.filter((post) => post.id !== id);
    },

    updateTodo: (state, action) => {
      const { todoName, newTodoName } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.todoName === todoName);
      if (todoToUpdate) {
        todoToUpdate.todoName = newTodoName;
      }
    },
    
  },
});

export const { addTodo, editTodo, deleteTodo, updateTodo } = todoSlice.actions;

const todoReducer = todoSlice.reducer;

export default todoReducer;

